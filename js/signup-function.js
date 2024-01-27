import * as variable from './variable.js';

export function isValidEmail(email) {
  const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return emailRegex.test(email);
}

export const emailValidation = function() {
  let emailInput = variable.email.value.trim();
  let emailFormatErrorMessage = document.querySelector('.email-format-error-message');
  
  if (emailInput === '') {
    variable.emailErrorMessage.style.display = 'block';
    emailFormatErrorMessage.style.display = 'none';
    variable.email.style.border = '0.1rem solid var(--red)';
  } else if(!isValidEmail(emailInput)) {
    variable.emailErrorMessage.style.display = 'none';
    emailFormatErrorMessage.style.display = 'block';
    variable.email.style.border = '0.1rem solid var(--red)';
  } else if(emailInput === 'test@codeit.com') {
    variable.emailErrorMessage.style.display = 'block';
    variable.emailErrorMessage.textContent = '이미 사용 중인 이메일입니다.';
    emailFormatErrorMessage.style.display = 'none';
    variable.email.style.border = '0.1rem solid var(--red)';
  } else {
    variable.emailErrorMessage.style.display = 'none';
    emailFormatErrorMessage.style.display = 'none';
    return 1;
  }
}

export const passwordValidation = function() {
  let passwordInput = variable.password.value.trim();
  if(passwordInput.length >= 8 && /\d/.test(passwordInput) && /[a-zA-Z]/.test(passwordInput)) {
    variable.passwordErrorMessage.style.display = 'none';
    return 1;
  } else {
    variable.passwordErrorMessage.style.display = 'block';
    variable.passwordErrorMessage.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
  }
}

export const passwordChecking = function() {
  let passwordInput = variable.password.value.trim();
  let passwordCheckInput = variable.passwordCheck.value.trim();
  if(passwordInput != passwordCheckInput) {
    variable.passwordCheckErrorMessage.style.display = 'block';
  } else {
    variable.passwordCheckErrorMessage.style.display = 'none';
    return 1;
  }
}

export const signFormValidation = function(event) {
  event.preventDefault();
  emailValidation();
  passwordValidation();
  passwordChecking();
  if(emailValidation() == 1 && passwordValidation() == 1 && passwordChecking() == 1) {
    window.location.href = '../folder.html';
  }
}

export const eyeImgChange = function() {
  if(variable.password.type === 'password') {
    variable.password.type = 'text';
    variable.eyeImage.src = '../../images/eye-on.png';
  } else {
    variable.password.type = 'password';
    variable.eyeImage.src = '../../images/eye-off.svg';
  }
}

export const eyeImgChange2 = function() {
  if(variable.passwordCheck.type === 'password') {
    variable.passwordCheck.type = 'text';
    variable.eyeImage2.src = '../../images/eye-on.png';
  } else {
    variable.passwordCheck.type = 'password';
    variable.eyeImage2.src = '../../images/eye-off.svg';
  }
}
