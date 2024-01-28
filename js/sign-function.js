import * as variable from './variable.js';

export function isValidEmail(email) {
  const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return emailRegex.test(email);
}

export const emailValidation = function() {
  let emailInput = variable.signForm.children[0].children[0].children[1].value.trim();
  
  if (emailInput === '') {
    variable.signForm.children[0].children[0].lastElementChild.style.display = 'block';
    variable.signForm.children[0].children[0].lastElementChild.textContent = '이메일을 입력해주세요.';
    variable.signForm.children[0].children[0].children[1].style.border = '0.1rem solid var(--red)';
  } else if(!isValidEmail(emailInput)) {
    variable.signForm.children[0].children[0].lastElementChild.style.display = 'block';
    variable.signForm.children[0].children[0].lastElementChild.textContent = '올바른 이메일 주소가 아닙니다.';
    variable.signForm.children[0].children[0].children[1].style.border = '0.1rem solid var(--red)';
  } else {
    variable.signForm.children[0].children[0].lastElementChild.style.display = 'none';
    variable.signForm.children[0].children[0].children[1].style.border = '0.1rem solid var(--gray20)';
  }
}

export const passwordValidation = function() {
  let passwordInput = variable.signForm.children[0].children[1].children[1].value.trim();

  if (passwordInput === '') {
    variable.signForm.children[0].children[1].lastElementChild.style.display = 'block';
    variable.signForm.children[0].children[1].children[1].style.border = '0.1rem solid var(--red)';
  } else {
    variable.signForm.children[0].children[1].lastElementChild.style.display = 'none';
    variable.signForm.children[0].children[1].children[1].style.border = '0.1rem solid var(--gray20)';
  }
}

export const signFormValidation = function(event) {
  event.preventDefault();

  if(variable.signForm.children[0].children[0].children[1].value === 'test@codeit.com' && variable.signForm.children[0].children[1].children[1].value === 'codeit101') {
    window.location.href = '../folder.html';
  } else if (variable.signForm.children[0].children[0].children[1].value === 'test@codeit.com' && variable.signForm.children[0].children[1].children[1].value !== 'codeit101'){
    variable.signForm.children[0].children[0].children[2].style.display = 'none';
    variable.signForm.children[0].children[1].children[3].textContent = '비밀번호를 확인해 주세요.';
    variable.signForm.children[0].children[1].children[3].style.display = 'block';
    variable.signForm.children[0].children[0].children[1].style.border = '0.1rem solid var(--gray20)';
    variable.signForm.children[0].children[1].children[1].style.border = '0.1rem solid var(--red)';
  } else if(variable.signForm.children[0].children[0].children[1].value !== 'test@codeit.com' && variable.signForm.children[0].children[1].children[1].value === 'codeit101') {
    variable.signForm.children[0].children[0].children[2].textContent = '이메일을 확인해주세요.';
    variable.signForm.children[0].children[0].children[2].style.display = 'block';
    variable.signForm.children[0].children[1].children[3].style.display = 'none';
    variable.signForm.children[0].children[0].children[1].style.border = '0.1rem solid var(--red)';
    variable.signForm.children[0].children[1].children[1].style.border = '0.1rem solid var(--gray20)';
  } else {
    variable.signForm.children[0].children[0].children[2].textContent = '이메일을 확인해주세요.';
    variable.signForm.children[0].children[0].children[2].style.display = 'block';
    variable.signForm.children[0].children[1].children[3].textContent = '비밀번호를 확인해 주세요.';
    variable.signForm.children[0].children[1].children[3].style.display = 'block';
    variable.signForm.children[0].children[0].children[1].style.border = '0.1rem solid var(--red)';
    variable.signForm.children[0].children[1].children[1].style.border = '0.1rem solid var(--red)';
  }
}

export const eyeImgChange = function(e) {
  if(e.currentTarget.previousElementSibling.type === 'password') {
    variable.signForm.children[0].children[1].children[1].type = 'text';
    variable.signForm.children[0].children[1].children[2].children[0].src = '../../images/eye-on.png';
  } else {
    variable.signForm.children[0].children[1].children[1].type = 'password';
    variable.signForm.children[0].children[1].children[2].children[0].src = '../../images/eye-off.svg';
  }
  e.stopPropagation();
}