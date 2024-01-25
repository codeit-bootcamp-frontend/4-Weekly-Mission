import {ERROR_MESSAGE } from "../../constant.js";
import { emailCheck, passwordCheck } from "../validation.js"; 
import { inputAddNode, inputDeleteNode } from "../node.js";
import { emailDiv, emailInput, pwdInput, signinBtn, pwdEyeIcon} from "../declaration.js";

export let [emailVal, pwdVal] = ["", ""];

// 에러 메세지 출력 함수
export function errorMsg(errorCase) {
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
export function emailHandlerFunc(email) {
  if(email) {
    emailCheck(email) ? inputDeleteNode('email') : errorMsg("wrongEmail")
  } else {
    errorMsg("NoEmail");
  }
  emailVal = email; 
}

// 비밀번호 input 핸들러 함수
export function passwordHandlerFuc(password) {
  if(password) {
    passwordCheck(password) ? inputDeleteNode('password') : errorMsg("wrongPwd")
  } else {
    errorMsg("NoPwd");
  }
  pwdVal = password;
}

// password input 눈모양 클릭 실행 함수
export function EyePwd(EyeStatus) {
  if(EyeStatus.classList.contains('off')) {
    pwdEyeIcon.setAttribute('src',"assets/icons/eye-off.png");
    pwdInput.setAttribute('type', 'password');

  } else {
    pwdEyeIcon.setAttribute('src',"assets/icons/eye-on.png");
    pwdInput.setAttribute('type', 'text');
  }
}
