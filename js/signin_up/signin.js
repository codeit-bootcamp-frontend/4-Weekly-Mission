import * as common from "./common_login.js";
import { emailCheck } from "../validation.js"; 
import { inputDeleteNode } from "../node.js";
import { emailInput, pwdInput, signinBtn, pwdEyeIcon} from "../declaration.js";

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
function trySignin() {
  if(emailVal === "test@codeit.com" && pwdVal === "codeit101") {
    return location.assign("folder.html");
  } else {
    return common.errorMsg("Other"); 
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
  common.EnterLogin(e.key,trySignin);
});

// password input 이벤트 함수 등록
pwdInput.addEventListener('focusout', function(e) {
  passwordHandlerFuc(e.target.value);
});
pwdInput.addEventListener('keypress', function(e) {
  common.EnterLogin(e.key, trySignin);
});

// 로그인 버튼 이벤트 함수 등록
signinBtn.addEventListener('click', function(e) {
  trySignin(emailVal, pwdVal);
 });


 // 눈모양 아이콘 이벤트 함수 등록
pwdEyeIcon.addEventListener('click', function(e) {
  e.target.classList.toggle('off');
  common.EyePwd(e.target);
 })