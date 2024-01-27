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
  handleEnterKey,
} from './utils/auth.js';

const signInBtn = document.querySelector('#signin-btn');

const handleLoginFailure = () => {
  applyError(emailError, MESSAGE.CHECK_EMAIL, emailInput);
  applyError(pwError, MESSAGE.CHECK_PASSWORD, pwInput);
};

// 로그인 로직 수정필요
const handleLogin = () => {
  if (emailInput.value === TEST_AUTH.EMAIL && pwInput.value === TEST_AUTH.PW) {
    window.location.href = 'folder.html';
  } else {
    handleLoginFailure();
  }
};

emailInput.addEventListener('focusout', validateEmail);
emailInput.addEventListener('keydown', (e) => handleEnterKey(e, handleLogin));

pwInput.addEventListener('focusout', validatePw);
pwInput.addEventListener('keydown', (e) => handleEnterKey(e, handleLogin));
pwToggle.addEventListener('click', () => handleClickPwToggle(pwInput, pwToggle));

signInBtn.addEventListener('click', handleLogin);
