import { signForm, errorMessageEmail, errorMessagePassword, emailInput, passwordInput, submitBtn as loginBtn, passwordEyeBtn, passwordEyeOff, passwordEyeOn, checkValidationEmail, errorMsgAdd, errorMsgRemove, toggleEyeBtn } from './sign.js';

function checkEmail(){
  if (emailInput.value === ""){
        errorMsgAdd(emailInput, errorMessageEmail, "이메일을 입력해 주세요");
        return false;
      } else if (!checkValidationEmail(emailInput.value)){
        errorMsgAdd(emailInput, errorMessageEmail, "올바른 이메일 주소가 아닙니다");
        return false;
      } else {
        errorMsgRemove(emailInput, errorMessageEmail);
        return true;
      };
}; // 이메일 유효성 체크

function checkPassword(){
  if (passwordInput.value === ""){
    errorMsgAdd(passwordInput, errorMessagePassword, "비밀번호를 입력해 주세요");
    return false;
  } else {
    errorMsgRemove(passwordInput, errorMessagePassword);
    return true;
  }
}; // 비밀번호 유효성 체크

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
    tryLogin(event);
  };
});
passwordEyeBtn.addEventListener('click', function(){
  toggleEyeBtn(passwordInput, passwordEyeOff, passwordEyeOn);
}); // 비밀번호 보이기/가리기