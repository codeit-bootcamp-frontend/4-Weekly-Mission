import {ERROR_MESSAGE } from "../constant.js";
import { emailCheck, passwordCheck } from "./validation.js"; 
import { inputAddNode, inputDeleteNode } from "./node.js";

const emailDiv = document.querySelector('#email');
const emailInput = document.querySelector('.email-input');
const pwdInput = document.querySelector('.password-input');
const signinBtn = document.querySelector('#signinBtn');
const pwdEyeIcon = document.querySelector('.PwdEyeIcon');

let [emailVal, pwdVal] = ["", ""];

// 에러 메세지 출력 함수
function errorMsg(errorCase) {
  let newNode = document.createElement('div');

  switch(errorCase) {
    case "NoEmail":
      inputAddNode('email', ERROR_MESSAGE.email.empty, errorCase);
      break;
    case "wrongEmail":
      inputAddNode('email', ERROR_MESSAGE.email.invalid, errorCase);
      break;
    case "inUseEmail":
      inputAddNode('email', ERROR_MESSAGE.email.inUse, errorCase);
    case "NoPwd" :
      inputAddNode('password', ERROR_MESSAGE.password.empty, errorCase);
      break;
    case "wrongPwd" :
      inputAddNode('password', ERROR_MESSAGE.password.invalid, errorCase);
      break;
    case "Other": 
      inputAddNode('email', ERROR_MESSAGE.email.check, errorCase);
      inputAddNode('password', ERROR_MESSAGE.password.check, errorCase);
      break;
  }
 }

// 이메일 input 핸들러
function emailHandlerFunc(email) {
  if(email) {
    emailCheck(email) ? inputDeleteNode('email') : errorMsg("wrongEmail")
  } else {
    errorMsg("NoEmail");
  }
  emailVal = email; 
}

// 비밀번호 input 핸들러 함수
function passwordHandlerFuc(password) {
  if(password) {
    passwordCheck(password) ? inputDeleteNode('password') : errorMsg("wrongPwd")
  } else {
    errorMsg("NoPwd");
  }
  pwdVal = password;
}

// 로그인 시도 함수
function trySignin(email,password) {
  if(email === "test@codeit.com" && password === "codeit101") {
    signinBtn.parentElement.setAttribute('href',"/folder.html");
  } else {
    errorMsg("Other"); 
  }
}


// enter키 입력으로 로그인 실행 
function EnterLogin(key) {
  if(key === 'Enter') {
    trySignin();
  }
}

// password input 눈모양 클릭 실행 함수
function EyePwd(EyeStatus) {
  if(EyeStatus.classList.contains('off')) {
    pwdEyeIcon.setAttribute('src',"assets/icons/eye-off.png");
    pwdInput.setAttribute('type', 'password');

  } else {
    pwdEyeIcon.setAttribute('src',"assets/icons/eye-on.png");
    pwdInput.setAttribute('type', 'text');
  }
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
 signinBtn.addEventListener('click', function(e) {
  trySignin(emailVal, pwdVal);
 });

 // 눈모양 아이콘 이벤트 함수 등록
 pwdEyeIcon.addEventListener('click', function(e) {
  e.target.classList.toggle('off');
  EyePwd(e.target);
 })
