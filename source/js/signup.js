import signupCheck from './signupCheck.js';
import validateEmail from '../utils/emailValidate.js';
import validatePassword from '../utils/passwordValidate.js';

const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const passwordCheckInput = document.getElementById('passwordCheck');
const passwordCheckError = document.getElementById('passwordCheckError');

//email 에러 메시지 호출
emailInput.addEventListener('focusout', handleEmailCheck);
function handleEmailCheck() {
  const checkEmail = validateEmail(emailInput.value);
  if (!checkEmail) {
    emailInput.classList.add('invalid');
    emailError.innerHTML = emailInput.value.trim() ? '올바른 이메일 주소가 아닙니다.' : '이메일을 입력해 주세요.';
    return;
  }
  emailInput.classList.remove('invalid');
  emailError.innerHTML = '';
}

//password 에러 메시지 호출
passwordInput.addEventListener('focusout', handlePasswordCheck);
function handlePasswordCheck() {
  const checkPassword = validatePassword(passwordInput.value);
  if (!checkPassword) {
    passwordInput.classList.add('invalid');
    passwordError.innerHTML = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
  } else {
    passwordInput.classList.remove('invalid');
    passwordError.innerHTML = '';
  }
}

//비밀번호 input과 비밀번호 확인 Input 일치 검사
passwordCheckInput.addEventListener('focusout', passwordSameCheck);
function passwordSameCheck() {
  if (passwordInput.value !== passwordCheckInput.value) {
    passwordCheckInput.classList.add('invalid');
    passwordCheckError.innerHTML = '비밀번호가 일치하지 않아요.';
  } else {
    passwordCheckInput.classList.remove('invalid');
    passwordCheckError.innerHTML = '';
  }
}

signupCheck;
