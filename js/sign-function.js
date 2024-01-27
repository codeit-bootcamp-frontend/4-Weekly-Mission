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
  } else {
    variable.emailErrorMessage.style.display = 'none';
    emailFormatErrorMessage.style.display = 'none';
    variable.email.style.border = '0.1rem solid var(--gray20)';
  }
}

export const passwordValidation = function() {
  let passwordInput = this.value.trim();

  if (passwordInput === '') {
    variable.passwordErrorMessage.style.display = 'block';
    document.querySelector('#password').style.border = '0.1rem solid var(--red)';
  } else {
    variable.passwordErrorMessage.style.display = 'none';
    document.querySelector('#password').style.border = '0.1rem solid var(--gray20)';
  }
}

export const signFormValidation = function(event) {
  event.preventDefault();

  if(variable.email.value === 'test@codeit.com' && variable.password.value === 'codeit101') {
    window.location.href = '../folder.html';
  } else {
    variable.emailErrorMessage.textContent = '이메일을 확인해주세요.'
    variable.emailErrorMessage.style.display = 'block';
    variable.passwordErrorMessage.textContent = '비밀번호를 확인해 주세요.'
    variable.passwordErrorMessage.style.display = 'block';
    document.querySelector('#email').style.border = '0.1rem solid var(--red)';
    document.querySelector('#password').style.border = '0.1rem solid var(--red)';
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