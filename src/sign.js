import SIGN from './constants/VALIDATION.js';

const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const pwInput = document.getElementById('password');
const pwError = document.getElementById('password-error');
const pwToggle = document.querySelector('.password-eye');
const signBtn = document.querySelector('.sign-normal__btn');

const applyErrorStyle = (el) => {
  el.style.border = '1px solid var(--red)';
};
const resetErrorStyle = (el) => {
  el.style.border = '';
};

const isEmailFormat = (email) => {
  return SIGN.EMAIL_REGEX.test(email);
};
const isPwFormat = (pw) => {
  return SIGN.PW_REGEX.test(pw);
};

const validateEmail = () => {
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    emailError.innerText = SIGN.REQUIRED_EMAIL;
    applyErrorStyle(emailInput);
  } else if (!isEmailFormat(emailValue)) {
    emailError.innerText = SIGN.INVALID_EMAIL_FORMAT;
    applyErrorStyle(emailInput);
  } else {
    emailError.innerText = '';
    resetErrorStyle(emailInput);
  }
};

const validatePw = () => {
  const pwValue = pwInput.value.trim();

  if (pwValue === '') {
    pwError.innerText = SIGN.REQUIRED_PASSWORD;
    applyErrorStyle(pwInput);
  } else if (!isPwFormat(pwValue)) {
    pwError.innerText = SIGN.INVALID_PW_FORMAT;
    applyErrorStyle(pwInput);
  } else {
    pwError.innerText = '';
    resetErrorStyle(pwInput);
  }
};

const handleLogin = () => {
  const emailValue = emailInput.value.trim();
  const pwValue = pwInput.value.trim();

  if (emailValue === 'test@codeit.com' && pwValue === 'codeit101') {
    console.log('로그인 성공!');
    window.location.href = 'folder.html';
  } else {
    console.log('로그인 실패!');
    emailError.innerText = SIGN.CHECK_EMAIL;
    pwError.innerText = SIGN.CHECK_PASSWORD;
    applyErrorStyle(emailInput);
    applyErrorStyle(pwInput);
  }
};

const handleEnterKey = (e) => {
  if (e.key === 'Enter') handleLogin();
};

const handleClickPwToggle = () => {
  if (pwInput.type === 'password') {
    pwInput.type = 'text';
    pwToggle.src = 'public/images/eye-on.svg';
  } else {
    pwInput.type = 'password';
    pwToggle.src = 'public/images/eye-off.svg';
  }
};

emailInput.addEventListener('focusout', validateEmail);
emailInput.addEventListener('keydown', handleEnterKey);
pwInput.addEventListener('focusout', validatePw);
pwInput.addEventListener('keydown', handleEnterKey);
signBtn.addEventListener('click', handleLogin);
pwToggle.addEventListener('click', handleClickPwToggle);
