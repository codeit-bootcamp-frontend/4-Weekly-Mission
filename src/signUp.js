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
  if (emailInput.value === TEST_AUTH.EMAIL) {
    applyError(emailError, MESSAGE.DUPLICATE_EMAIL, emailInput);
    return true;
  } else {
    return false;
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

//회원가입 로직 수정필요
const handleSignUp = () => {
  console.log('회원가입 성공');
};

emailInput.addEventListener('focusout', isDuplicateEmail);

pwInput.addEventListener('focusout', isValidatePw);
pwCheckInput.addEventListener('focusout', handlePasswordMatch);
pwToggle.addEventListener('click', () => handleClickPwToggle(pwInput, pwToggle));
pwCheckToggle.addEventListener('click', () => handleClickPwToggle(pwCheckInput, pwCheckToggle));
signUpForm.addEventListener('submit', (e) => handleSignUp(e));
