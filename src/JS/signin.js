import {signForm, errorMessageEmail, errorMessagePassword, emailInput, passwordInput, submitBtn as loginBtn, eyeBtn, errorMsgAdd, checkEmail, checkPassword, toggleEyeBtn} from './sign.js';

function loginCheck(){
  if(checkEmail() && checkPassword()){ // 먼저 이메일과 비밀번호의 유효성 확인
    if(emailInput.value === 'test@codeit.com' && passwordInput.value === "codeit101"){
      return true;
    } else if (emailInput.value !== 'test@codeit.com' && passwordInput.value !== "codeit101"){
      errorMsgAdd(emailInput, errorMessageEmail, '이메일을 확인해 주세요');
      errorMsgAdd(passwordInput, errorMessagePassword, "비밀번호를 확인해 주세요");
      return false;
    } else if (emailInput.value !== 'test@codeit.com'){
      errorMsgAdd(emailInput, errorMessageEmail, '이메일을 확인해 주세요');
      return false;
    } else if (passwordInput.value !== "codeit101"){
      errorMsgAdd(passwordInput, errorMessagePassword, "비밀번호를 확인해 주세요");
      return false;
    };
  };
}; // 허락된 계정인지 확인

function tryLogin(e){
  e.preventDefault();
  if(loginCheck()){
    let link = '/folder.html';
    window.location.href = link;
  };
}; // 로그인 시도

// 이벤트 관리
emailInput.addEventListener('focusout', checkEmail);
passwordInput.addEventListener('focusout', checkPassword);
loginBtn.addEventListener('click', tryLogin);
signForm.addEventListener('keydown', function(event){
  if (event.key === 'Enter'){
    tryLogin(e);
  };
});
eyeBtn.addEventListener('click', toggleEyeBtn);