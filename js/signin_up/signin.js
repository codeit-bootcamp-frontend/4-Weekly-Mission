import { ERROR_MESSAGE } from "../../constant.js";
import * as common from "./common_login.js";
import { emailCheck, passwordCheck, isMatch, checkEmailDupli } from "../validation.js"; 
import { inputDeleteNode } from "../node.js";
import { emailDiv, pwdDiv, pwdDiv2, emailInput, pwdInput, signinBtn, pwdEyeIcon, pwdEyeIcon2, pwdInput2 } from "../declaration.js";

let emailVal = "", pwdVal = "", pwdVal2 = "";

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
  email ? (
    checkEmailDupli(email) ? 
      emailCheck(email) ? inputDeleteNode('email') : common.errorMsg("wrongEmail")
    : common.errorMsg("inUseEmail")
  ) : common.errorMsg("NoEmail")
  emailVal = email; 
}

// 회원가입 시도 함수
function trySignin() {
  if((!emailDiv[2] && !pwdDiv[2] && !pwdDiv2[2]) && (emailVal&&pwdVal&&pwdVal2)) {
    return location.assign("folder.html");
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
  common.EnterLogin(e.key,trySignin);
});

// password input 이벤트 함수 등록
pwdInput.addEventListener('focusout', function(e) {
  passwordHandlerFuc(e.target.value);
  pwdVal = e.target.value;
});
pwdInput.addEventListener('keypress', function(e) {
  common.EnterLogin(e.key,trySignin);
});

pwdInput2.addEventListener('focusout', function(e) {
  pwdVal2 = e.target.value;
  isMatch(pwdVal, pwdVal2) ? inputDeleteNode("password2") : common.errorMsg("noMatchPwd")
})
pwdInput2.addEventListener('keypress', function(e) {
  common.EnterLogin(e.key,trySignin);
});

// 회원가입 버튼 이벤트 함수 등록
signinBtn.addEventListener('click', function(e) {
  trySignin();
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