import { MESSAGE, TEST_AUTH } from './constants/SIGN.js';
import {
  emailInput,
  emailError,
  pwInput,
  pwError,
  pwToggle,
  applyError,
  isValidateEmail,
  isValidatePw,
  handleClickPwToggle,
} from './utils/auth.js';

const signInform = document.querySelector('#signin-form');

const handleLoginFailure = () => {
  applyError(emailError, MESSAGE.CHECK_EMAIL, emailInput);
  applyError(pwError, MESSAGE.CHECK_PASSWORD, pwInput);
};

const handleLogin = (e) => {
  e.preventDefault();

  if (emailInput.value === TEST_AUTH.EMAIL && pwInput.value === TEST_AUTH.PW) {
    window.location.href = 'folder.html';
  } else {
    handleLoginFailure();
  }
};

emailInput.addEventListener('focusout', isValidateEmail);
pwInput.addEventListener('focusout', isValidatePw);
pwToggle.addEventListener('click', () => handleClickPwToggle(pwInput, pwToggle));
signInform.addEventListener('submit', (e) => handleLogin(e));
