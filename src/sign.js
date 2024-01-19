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

const applyError = (errorEl, errorMsg, input) => {
  errorEl.innerText = errorMsg;
  applyErrorStyle(input);
};
const resetError = (errorEl, input) => {
  errorEl.innerText = '';
  resetErrorStyle(input);
};

const isEmailFormat = (email) => {
  return SIGN.EMAIL_REGEX.test(email);
};
const isPwFormat = (pw) => {
  return SIGN.PW_REGEX.test(pw);
};

const validateEmail = () => {
  const emailValue = emailInput.value.trim();

  if (emailValue === '')
    applyError(emailError, SIGN.REQUIRED_EMAIL, emailInput);
  else if (!isEmailFormat(emailValue))
    applyError(emailError, SIGN.INVALID_EMAIL_FORMAT, emailInput);
  else resetError(emailError, emailInput);
};

const validatePw = () => {
  const pwValue = pwInput.value.trim();

  if (pwValue === '') applyError(pwError, SIGN.REQUIRED_PASSWORD, pwInput);
  else if (!isPwFormat(pwValue))
    applyError(pwError, SIGN.INVALID_PW_FORMAT, pwInput);
  else resetError(pwError, pwInput);
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

const handleLoginFailure = () => {
  applyError(emailError, SIGN.CHECK_EMAIL, emailInput);
  applyError(pwError, SIGN.CHECK_PASSWORD, pwInput);
};

const handleLogin = () => {
  const emailValue = emailInput.value.trim();
  const pwValue = pwInput.value.trim();

  if (emailValue === 'test@codeit.com' && pwValue === 'codeit101') {
    console.log('로그인 성공!');
    window.location.href = 'folder.html';
  } else {
    console.log('로그인 실패!');
    handleLoginFailure();
  }
};

const handleEnterKey = (e) => {
  if (e.key === 'Enter') handleLogin();
};

emailInput.addEventListener('focusout', validateEmail);
emailInput.addEventListener('keydown', handleEnterKey);

pwInput.addEventListener('focusout', validatePw);
pwInput.addEventListener('keydown', handleEnterKey);

signBtn.addEventListener('click', handleLogin);
pwToggle.addEventListener('click', handleClickPwToggle);
