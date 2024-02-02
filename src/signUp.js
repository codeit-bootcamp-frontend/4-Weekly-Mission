import { MESSAGE, TEST_AUTH } from './constants/SIGN.js';
import {
  emailInput,
  emailError,
  pwInput,
  pwToggle,
  applyError,
  resetError,
  isValidateEmail,
  isValidatePw,
  handleClickPwToggle,
} from './utils/auth.js';

const pwCheckInput = document.getElementById('password-check');
const pwCheckError = document.getElementById('password-check-error');
const pwCheckToggle = document.querySelector('.password-check-eye');
const signUpForm = document.querySelector('#signup-form');

const isDuplicateEmail = () => {
  if (emailInput.value !== TEST_AUTH.EMAIL) return false;
  applyError(emailError, MESSAGE.DUPLICATE_EMAIL, emailInput);
  return true;
};

const isPasswordMatch = () => {
  if (pwCheckInput.value !== pwInput.value) {
    applyError(pwCheckError, MESSAGE.NOT_MATCH_PASSWORD, pwCheckInput);
    return false;
  } else {
    resetError(pwCheckError, pwCheckInput);
    return true;
  }
};

const validEmailForSignUp = () => {
  return isValidateEmail() && !isDuplicateEmail();
};

const validPwForSignUp = () => {
  return isValidatePw() && isPasswordMatch();
};

const handleSignUp = (e) => {
  e.preventDefault();

  const isValidEmail = validEmailForSignUp();
  const isValidPw = validPwForSignUp();

  if (isValidEmail && isValidPw) window.location.href = 'folder.html';
};

emailInput.addEventListener('focusout', validEmailForSignUp);
pwInput.addEventListener('focusout', isValidatePw);
pwCheckInput.addEventListener('focusout', isPasswordMatch);
pwToggle.addEventListener('click', () => handleClickPwToggle(pwInput, pwToggle));
pwCheckToggle.addEventListener('click', () => handleClickPwToggle(pwCheckInput, pwCheckToggle));
signUpForm.addEventListener('submit', (e) => handleSignUp(e));
