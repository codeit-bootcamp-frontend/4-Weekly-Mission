import login from './loginCheck.js';
import validateEmail from '../utils/emailValidate.js';

login;

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

//email 에러 메시지 호출
emailInput.addEventListener('focusout', handleEmailCheck);
function handleEmailCheck() {
  const isEmailValid = validateEmail(emailInput.value);
  const emailError = document.getElementById('emailError');
  if (!isEmailValid) {
    emailInput.classList.add('invalid');
    emailError.innerHTML = emailInput.value.trim() ? '올바른 이메일 주소가 아닙니다.' : '이메일을 입력해 주세요.';
    return;
  }
  emailInput.classList.remove('invalid');
  emailError.innerHTML = '';
}

//password 에러 메시지 호출
passwordInput.addEventListener('focusout', validatePasswordError);
function validatePasswordError() {
  const passwordError = document.getElementById('passwordError');
  if (!passwordInput.value.trim()) {
    passwordInput.classList.add('invalid');
    passwordError.innerHTML = '비밀번호를 입력해 주세요.';
    return;
  }
  passwordInput.classList.remove('invalid');
  passwordError.innerHTML = '';
}
