import signupCheck from './signupCheck.js';
import emailValidate from '../utils/emailValidate.js';
import passwordValidate from '../utils/passwordValidate.js';

const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');
const passwordCheckInput = document.querySelector('#passwordCheck');
const passwordCheckError = document.querySelector('#passwordCheckError');

//email 에러 메시지 호출
emailInput.addEventListener('focusout', handleEmailCheck);
function handleEmailCheck() {
  const checkEmail = emailValidate(emailInput.value);
  if (!checkEmail) {
    emailInput.classList.add('invalid');
    emailError.innerHTML = emailInput.value.trim() ? '올바른 이메일 주소가 아닙니다.' : '이메일을 입력해 주세요.';
    return;
  }
  emailInput.classList.remove('invalid');
  emailError.innerHTML = '';
}

//사용 중인 email 에러 호출
emailInput.addEventListener('focusout', usedEmailCheck);
function usedEmailCheck() {
  const emailValue = emailInput.value;
  const usedEmail = 'test@codeit.com';

  if (emailValue === usedEmail) {
    emailInput.classList.add('invalid');
    emailError.innerHTML = '이미 사용 중인 이메일입니다.';
  }
}

//password 에러 메시지 호출
passwordInput.addEventListener('focusout', handlePasswordCheck);
function handlePasswordCheck() {
  const checkPassword = passwordValidate(passwordInput.value);
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
