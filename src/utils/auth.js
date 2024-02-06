import { getTokenFromLocalStorage } from '../api/tokenSetting.js';
import { MESSAGE, REGEX, ACTION } from '../constants/SIGN.js';

export const emailInput = document.getElementById('email');
export const emailError = document.getElementById('email-error');
export const pwInput = document.getElementById('password');
export const pwError = document.getElementById('password-error');
export const pwToggle = document.querySelector('.password-eye');

export const applyErrorStyle = (el) => {
  el.style.border = '1px solid var(--red)';
};
export const resetErrorStyle = (el) => {
  el.style.border = '';
};

export const applyError = (errorEl, errorMsg, input) => {
  errorEl.innerText = errorMsg;
  applyErrorStyle(input);
};
export const resetError = (errorEl, input) => {
  errorEl.innerText = '';
  resetErrorStyle(input);
};

export const isValidFormat = (action, input) => {
  if (action === ACTION.EMAIL) return REGEX.EMAIL_REGEX.test(input);
  if (action === ACTION.PW) return REGEX.PW_REGEX.test(input);
};

export const isValidateEmail = () => {
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

export const isValidatePw = () => {
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

export const handleClickPwToggle = (input, toggle) => {
  input.type = input.type === 'password' ? 'text' : 'password';
  toggle.src = input.type === 'password' ? 'public/images/eye-off.svg' : 'public/images/eye-on.svg';
};

export const redirectIfTokenExists = (token) => {
  if (getTokenFromLocalStorage(token)) {
    window.location.href = 'folder.html';
  }
};
