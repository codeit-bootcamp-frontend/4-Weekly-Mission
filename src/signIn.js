import { MESSAGE, TEST_AUTH } from './constants/SIGN.js';
import {
  emailInput,
  emailError,
  pwInput,
  pwError,
  pwToggle,
  applyError,
  validateEmail,
  validatePw,
  handleClickPwToggle,
} from './utils/auth.js';

const signInform = document.querySelector('#signin-form');

const handleLoginFailure = () => {
  applyError(emailError, MESSAGE.CHECK_EMAIL, emailInput);
  applyError(pwError, MESSAGE.CHECK_PASSWORD, pwInput);
};

// 로그인 로직 수정필요
const handleLogin = (e) => {
  e.preventDefault();

  if (emailInput.value === TEST_AUTH.EMAIL && pwInput.value === TEST_AUTH.PW) {
    window.location.href = 'folder.html';
  } else {
    handleLoginFailure();
  }
};

emailInput.addEventListener('focusout', validateEmail);
pwInput.addEventListener('focusout', validatePw);
pwToggle.addEventListener('click', () => handleClickPwToggle(pwInput, pwToggle));
signInform.addEventListener('submit', (e) => handleLogin(e));
