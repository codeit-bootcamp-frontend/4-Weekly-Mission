import { isEmailDuplicate, postSignUp } from './api/authAPI.js';
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
  redirectIfTokenExists,
} from './utils/auth.js';

const pwCheckInput = document.getElementById('password-check');
const pwCheckError = document.getElementById('password-check-error');
const pwCheckToggle = document.querySelector('.password-check-eye');
const signUpForm = document.querySelector('#signup-form');

const isDuplicateEmail = async () => {
  try {
    await isEmailDuplicate({ email: emailInput.value });
    return false;
  } catch (error) {
    applyError(emailError, MESSAGE.DUPLICATE_EMAIL, emailInput);
    return true;
  }
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

const handleSignUp = async (e) => {
  e.preventDefault();

  try {
    if (validPwForSignUp()) {
      await postSignUp({ email: emailInput.value, password: pwInput.value });
      alert('회원가입 성공🥳');
      window.location.href = 'folder.html';
    }
  } catch (error) {
    alert('회원가입을 다시 시도 해주세요😭');
  }
};

window.addEventListener('DOMContentLoaded', redirectIfTokenExists('signup-token'));
emailInput.addEventListener('focusout', validEmailForSignUp);
pwInput.addEventListener('focusout', isValidatePw);
pwCheckInput.addEventListener('focusout', isPasswordMatch);
pwToggle.addEventListener('click', () => handleClickPwToggle(pwInput, pwToggle));
pwCheckToggle.addEventListener('click', () => handleClickPwToggle(pwCheckInput, pwCheckToggle));
signUpForm.addEventListener('submit', (e) => handleSignUp(e));
