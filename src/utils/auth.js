import { MESSAGE, REGEX, ACTION } from '../constants/SIGN.js';

const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const pwInput = document.getElementById('password');
const pwError = document.getElementById('password-error');
const pwToggle = document.querySelector('.password-eye');

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

const isValidFormat = (action, input) => {
  if (action === ACTION.EMAIL) return REGEX.EMAIL_REGEX.test(input);
  if (action === ACTION.PW) return REGEX.PW_REGEX.test(input);
};

const isValidateEmail = () => {
  if (emailInput.value === '') {
    applyError(emailError, MESSAGE.REQUIRED_EMAIL, emailInput);
    return false;
  } else if (!isValidFormat(ACTION.EMAIL, emailInput.value)) {
    applyError(emailError, MESSAGE.INVALID_EMAIL_FORMAT, emailInput);
    return false;
  } else {
    resetError(emailError, emailInput);
    return true;
  }
};

const isValidatePw = () => {
  if (pwInput.value === '') {
    applyError(pwError, MESSAGE.REQUIRED_PASSWORD, pwInput);
    return false;
  } else if (!isValidFormat(ACTION.PW, pwInput.value)) {
    applyError(pwError, MESSAGE.INVALID_PW_FORMAT, pwInput);
    return false;
  } else {
    resetError(pwError, pwInput);
    return true;
  }
};

const handleClickPwToggle = (input, toggle) => {
  input.type = input.type === 'password' ? 'text' : 'password';
  toggle.src = input.type === 'password' ? 'public/images/eye-off.svg' : 'public/images/eye-on.svg';
};

export {
  emailInput,
  emailError,
  pwInput,
  pwError,
  pwToggle,
  applyError,
  resetError,
  isValidateEmail,
  isValidatePw,
  handleClickPwToggle,
};
