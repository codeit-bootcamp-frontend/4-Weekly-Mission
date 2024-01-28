import { signForm, errorMessageEmail, errorMessagePassword, emailInput, passwordInput, submitBtn as signUpBtn, eyeBtn, eyeOff, eyeOn, checkValidationEmail, errorMsgAdd, errorMsgRemove, toggleEyeBtn } from './sign.js';

function checkEmail(){
  if (emailInput.value === ""){
    errorMsgAdd(emailInput, errorMessageEmail, "이메일을 입력해 주세요");
    return false;
  } else if (!checkValidationEmail(emailInput.value)){
    errorMsgAdd(emailInput, errorMessageEmail, "올바른 이메일 주소가 아닙니다");
    return false;
  } else if (emailInput.value === 'test@codeit.com'){
    errorMsgAdd(emailInput, errorMessageEmail, "이미 사용 중인 이메일입니다");
    return false;
  } else {
    errorMsgRemove(emailInput, errorMessageEmail);
    return true;
  };
} // 이메일 유효성 및 중복 체크

// 이벤트 관리
emailInput.addEventListener('focusout', checkEmail);