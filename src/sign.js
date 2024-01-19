import SIGN from './constants/VALIDATION.js';

const signEmail = document.getElementById('email');
const emailError = document.getElementById('email-error');
const signPw = document.getElementById('password');
const pwError = document.getElementById('password-error');
const pwToggle = document.querySelector('.password-eye');
const signBtn = document.querySelector('.sign-normal__btn');

const applyErrorStyle = (el) => {
  el.style.border = '1px solid var(--red)';
};
const resetErrorStyle = (el) => {
  el.style.border = '';
};

const isValidEmail = (email) => {
  return SIGN.EMAIL_REGEX.test(email);
};
const isValidPw = (pw) => {
  return SIGN.PW_REGEX.test(pw);
};

const validateEmail = () => {
  const emailValue = signEmail.value.trim();

  if (emailValue === '') {
    emailError.innerText = SIGN.REQUIRED_EMAIL;
    applyErrorStyle(signEmail);
  } else if (!isValidEmail(emailValue)) {
    emailError.innerText = SIGN.INVALID_EMAIL_FORMAT;
    applyErrorStyle(signEmail);
  } else {
    emailError.innerText = '';
    resetErrorStyle(signEmail);
  }
};

const validatePw = () => {
  const pwValue = signPw.value.trim();

  if (pwValue === '') {
    pwError.innerText = SIGN.REQUIRED_PASSWORD;
    applyErrorStyle(signPw);
  } else if (!isValidPw(pwValue)) {
    pwError.innerText = SIGN.INVALID_PW_FORMAT;
    applyErrorStyle(signPw);
  } else {
    pwError.innerText = '';
    resetErrorStyle(signPw);
  }
};

const handleLogin = () => {
  const emailValue = signEmail.value.trim();
  const pwValue = signPw.value.trim();

  if (emailValue === 'test@codeit.com' && pwValue === 'codeit101') {
    console.log('로그인 성공!');
    window.location.href = 'folder.html';
  } else {
    console.log('로그인 실패!');
    emailError.innerText = SIGN.CHECK_EMAIL;
    pwError.innerText = SIGN.CHECK_PASSWORD;
    applyErrorStyle(signEmail);
    applyErrorStyle(signPw);
  }
};

const handleEnterKey = (e) => {
  if (e.key === 'Enter') handleLogin();
};

const handleClickPwToggle = () => {
  if (signPw.type === 'password') {
    signPw.type = 'text';
    pwToggle.src = 'public/images/eye-on.svg';
  } else {
    signPw.type = 'password';
    pwToggle.src = 'public/images/eye-off.svg';
  }
};

signEmail.addEventListener('focusout', validateEmail);
signEmail.addEventListener('keydown', handleEnterKey);
signPw.addEventListener('focusout', validatePw);
signPw.addEventListener('keydown', handleEnterKey);
signBtn.addEventListener('click', handleLogin);
pwToggle.addEventListener('click', handleClickPwToggle);
