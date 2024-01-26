import {ERROR_MESSAGE } from "../../constant.js";
import * as common from "./common_login.js";
import { emailCheck, passwordCheck } from "../validation.js"; 
import { inputDeleteNode } from "../node.js";
import { emailInput, pwdInput, pwdInput2, signinBtn, pwdEyeIcon, pwdEyeIcon2, pwdDiv2} from "../declaration.js";
import { emailCheck } from "../validation.js";

let emailVal = "", pwdVal = "", pwdVal2 = "";

// 이메일 중복 확인 함수
function isMatch (password1, password2) {
  return password1 === password2;
}

// 이메일 중복 노드 추가 함수
function addinUseError() {
  console.log(pwdDiv2)
  let newNode = document.createElement('div');
  newNode.innerHTML = `<p>${ERROR_MESSAGE.password.recheck}</p>`;
  newNode.classList.add("inUseEmail",'errorMsg');
  pwdInput2.setAttribute('status','error');
  pwdDiv2.children[2] ? pwdDiv2.children[2].remove() : null;
  pwdDiv2.append(newNode);
}

// 회원가입 시도 함수
function trySignin(email,password) {
  if(email === "test@codeit.com") {
    common.errorMsg('inUseEmail');
  } else if (emailCheck(email)){
    signupBtn.parentElement.setAttribute('href',"/folder.html");
  }
}

// 비밀번호 input 핸들러 함수
function passwordHandlerFuc(password) {
  if(password) {
    passwordCheck(password) ? inputDeleteNode('password') : common.errorMsg("wrongPwd")
  } else {
    common.errorMsg("NoPwd");
  }
}

// 이메일 input 핸들러
function emailHandlerFunc(email) {
  if(email) {
    emailCheck(email) ? inputDeleteNode('email') : common.errorMsg("wrongEmail")
  } else {
    common.errorMsg("NoEmail");
  }
  emailVal = email; 
}

// enter키 입력으로 회원가입 실행 
function EnterSignin(key) {
  if(key === 'Enter') {
    trySignin(emailVal, pwdVal);
  }
}

// 비밀번호 확인 input 눈모양 클릭 실행 함수
export function EyePwd2(EyeStatus) {
  if(EyeStatus.classList.contains('off')) {
    pwdEyeIcon2.setAttribute('src',"assets/icons/eye-off.png");
    pwdInput2.setAttribute('type', 'password');

  } else {
    pwdEyeIcon2.setAttribute('src',"assets/icons/eye-on.png");
    pwdInput2.setAttribute('type', 'text');
  }
}

// email input 이벤트 함수 등록
emailInput.addEventListener('focusout', function(e) {
  emailHandlerFunc(e.target.value);
  emailVal = e.target.value;
});
emailInput.addEventListener('keypress', function(e) {
  EnterSignin(e.key);
});

// password input 이벤트 함수 등록
pwdInput.addEventListener('focusout', function(e) {
  passwordHandlerFuc(e.target.value);
  pwdVal = e.target.value;
});
pwdInput.addEventListener('keypress', function(e) {
  EnterSignin(e.target.value);
});

pwdInput2.addEventListener('focusout', function(e) {
  pwdVal2 = e.target.value;
  isMatch(pwdVal, pwdVal2) ? null : addinUseError()
})

// 회원가입 버튼 이벤트 함수 등록
signinBtn.addEventListener('click', function(e) {
  trySignin(emailVal, pwdVal);
  // console.log(isMatch(common.pwdVal,pwd2))
 });

 // 눈모양 아이콘 이벤트 함수 등록
pwdEyeIcon.addEventListener('click', function(e) {
  e.target.classList.toggle('off');
  common.EyePwd(e.target);
})

pwdEyeIcon2.addEventListener('click', function(e) {
  e.target.classList.toggle('off');
  EyePwd2(e.target);
})