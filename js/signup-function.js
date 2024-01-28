import * as variable from './variable.js';

export function isValidEmail(email) {
  const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return emailRegex.test(email);
}

export const emailValidation = function() {
  let emailInput = variable.signForm.children[0].children[0].children[1].value.trim();
  
  if (emailInput === '') {
    variable.signForm.children[0].children[0].children[2].style.display = 'block';
    variable.signForm.children[0].children[0].children[2].textContent = '이메일을 입력해주세요.';
    variable.signForm.children[0].children[0].children[1].style.border = '0.1rem solid var(--red)';
  } else if(!isValidEmail(emailInput)) {
    variable.signForm.children[0].children[0].children[2].style.display = 'block';
    variable.signForm.children[0].children[0].children[2].textContent = '올바른 이메일 주소가 아닙니다.';
    variable.signForm.children[0].children[0].children[1].style.border = '0.1rem solid var(--red)';
  } else if(emailInput === 'test@codeit.com') {
    variable.signForm.children[0].children[0].children[2].style.display = 'block';
    variable.signForm.children[0].children[0].children[2].textContent = '이미 사용 중인 이메일입니다.';
    variable.signForm.children[0].children[0].children[1].style.border = '0.1rem solid var(--red)';
  } else {
    variable.signForm.children[0].children[0].children[2].style.display = 'none';
    return 1;
  }
}

export const passwordValidation = function() {
  let passwordInput = variable.signForm.children[0].children[1].children[1].value.trim();
  if(passwordInput.length >= 8 && /\d/.test(passwordInput) && /[a-zA-Z]/.test(passwordInput)) {
    variable.signForm.children[0].children[1].children[3].style.display = 'none';
    return 1;
  } else {
    variable.signForm.children[0].children[1].children[3].style.display = 'block';
    variable.signForm.children[0].children[1].children[3].textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
  }
}

export const passwordChecking = function() {
  let passwordInput = variable.signForm.children[0].children[1].children[1].value.trim();
  let passwordCheckInput = variable.signForm.children[0].children[2].children[1].value.trim();
  if(passwordInput != passwordCheckInput) {
    variable.signForm.children[0].children[2].children[3].style.display = 'block';
  } else {
    variable.signForm.children[0].children[2].children[3].style.display = 'none';
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
  if(variable.signForm.children[0].children[1].children[1].type === 'password') {
    variable.signForm.children[0].children[1].children[1].type = 'text';
    variable.signForm.children[0].children[1].children[2].children[0].src = '../../images/eye-on.png';
  } else {
    variable.signForm.children[0].children[1].children[1].type = 'password';
    variable.signForm.children[0].children[1].children[2].children[0].src = '../../images/eye-off.svg';
  }
}

export const eyeImgChange2 = function() {
  if(variable.signForm.children[0].children[2].children[1].type === 'password') {
    variable.signForm.children[0].children[2].children[1].type = 'text';
    variable.signForm.children[0].children[2].children[2].children[0].src = '../../images/eye-on.png';
  } else {
    variable.signForm.children[0].children[2].children[1].type = 'password';
    variable.signForm.children[0].children[2].children[2].children[0].src = '../../images/eye-off.svg';
  }
}
