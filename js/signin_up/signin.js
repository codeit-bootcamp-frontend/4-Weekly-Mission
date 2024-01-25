import * as common from "./common_login.js";

// email input 이벤트 함수 등록
common.emailInput.addEventListener('focusout', function(e) {
  common.emailHandlerFunc(e.target.value);
});
common.emailInput.addEventListener('keypress', function(e) {
  common.EnterLogin(e.key);
});

// password input 이벤트 함수 등록
common.pwdInput.addEventListener('focusout', function(e) {
  common.passwordHandlerFuc(e.target.value);
});
common.pwdInput.addEventListener('keypress', function(e) {
  common.EnterLogin(e.key);
});

 // 눈모양 아이콘 이벤트 함수 등록
 common.pwdEyeIcon.addEventListener('click', function(e) {
  e.target.classList.toggle('off');
  common.EyePwd(e.target);
 })