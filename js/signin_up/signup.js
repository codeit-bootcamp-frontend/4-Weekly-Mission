import * as common from "./common_login.js";
import { emailDiv, emailInput, pwdInput, signinBtn, pwdEyeIcon} from "../declaration.js";

// enter키 입력으로 로그인 실행 
function EnterLogin(key) {
  if(key === 'Enter') {
    common.trySignup();
  }
}

// 로그인 시도 함수
function trySignup(email,password) {
  if(email === "test@codeit.com" && password === "codeit101") {
    signinBtn.parentElement.setAttribute('href',"/folder.html");
  } else {
    common.errorMsg("Other"); 
  }
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

// 로그인 버튼 이벤트 함수 등록
signinBtn.addEventListener('click', function(e) {
  trySignup(common.emailVal, common.pwdVal);
 });


 // 눈모양 아이콘 이벤트 함수 등록
pwdEyeIcon.addEventListener('click', function(e) {
  e.target.classList.toggle('off');
  common.EyePwd(e.target);
 })