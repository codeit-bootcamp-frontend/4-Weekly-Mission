import * as common from "./common_login.js";
import { emailCheck } from "../validation.js"; 
import { inputAddNode, inputDeleteNode } from "../node.js";
import { emailDiv, emailInput, pwdInput, signupBtn, pwdEyeIcon} from "../declaration.js";

let emailVal = "", pwdVal = "";

// 이메일 input 핸들러
function emailHandlerFunc(email) {
  if(email) {
    emailCheck(email) ? inputDeleteNode('email') : common.errorMsg("wrongEmail")
  } else {
    common.errorMsg("NoEmail");
  }
  emailVal = email; 
}

// 로그인 시도 함수
function trySignup(email,password) {
  if(email === "test@codeit.com" && password === "codeit101") {
    signupBtn.parentElement.setAttribute('href',"/folder.html");
  } else {
    common.errorMsg("Other"); 
  }
}

// enter키 입력으로 로그인 실행 
function EnterLogin(key) {
  if(key === 'Enter') {
    trySignup(emailVal, pwdVal);
  }
}

function passwordHandlerFuc(password) {
  password ? inputDeleteNode('password') : common.errorMsg("NoPwd");
  pwdVal = password;
}

// email input 이벤트 함수 등록
emailInput.addEventListener('focusout', function(e) {
  emailHandlerFunc(e.target.value);
});
emailInput.addEventListener('keypress', function(e) {
  EnterLogin(e.key);
});

// password input 이벤트 함수 등록
pwdInput.addEventListener('focusout', function(e) {
  passwordHandlerFuc(e.target.value);
});
pwdInput.addEventListener('keypress', function(e) {
  EnterLogin(e.key);
});

// 로그인 버튼 이벤트 함수 등록
signupBtn.addEventListener('click', function(e) {
  trySignup(emailVal, pwdVal);
 });


 // 눈모양 아이콘 이벤트 함수 등록
pwdEyeIcon.addEventListener('click', function(e) {
  e.target.classList.toggle('off');
  common.EyePwd(e.target);
 })