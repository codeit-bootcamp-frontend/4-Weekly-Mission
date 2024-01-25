import * as common from "./common_login.js";
import { emailDiv, emailInput, pwdInput, signinBtn, pwdEyeIcon} from "../declaration.js";

// 비밀번호 input 핸들러 함수
export function passwordHandlerFuc(password) {
  if(password) {
    passwordCheck(password) ? inputDeleteNode('password') : errorMsg("wrongPwd")
  } else {
    errorMsg("NoPwd");
  }
  pwdVal = password;
}

// email input 이벤트 함수 등록
emailInput.addEventListener('focusout', function(e) {
  common.emailHandlerFunc(e.target.value);
});
emailInput.addEventListener('keypress', function(e) {
  common.EnterLogin(e.key);
});

// password input 이벤트 함수 등록
pwdInput.addEventListener('focusout', function(e) {
  common.passwordHandlerFuc(e.target.value);
});
pwdInput.addEventListener('keypress', function(e) {
  common.EnterLogin(e.key);
});

 // 눈모양 아이콘 이벤트 함수 등록
pwdEyeIcon.addEventListener('click', function(e) {
  e.target.classList.toggle('off');
  common.EyePwd(e.target);
 })