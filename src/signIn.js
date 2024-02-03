import { postLogin } from './api/authAPI.js';
import { MESSAGE } from './constants/SIGN.js';
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
  redirectIfTokenExists,
} from './utils/auth.js';

const signInform = document.querySelector('#signin-form');

const handleLoginFailure = () => {
  applyError(emailError, MESSAGE.CHECK_EMAIL, emailInput);
  applyError(pwError, MESSAGE.CHECK_PASSWORD, pwInput);
};

const handleLogin = async (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = pwInput.value;

  try {
    await postLogin({ email, password });
    alert('로그인 성공🥳');
    window.location.href = 'folder.html';
  } catch (error) {
    handleLoginFailure();
    alert('로그인 실패🥹');
  }
};

window.addEventListener('DOMContentLoaded', redirectIfTokenExists('login-token'));
emailInput.addEventListener('focusout', isValidateEmail);
pwInput.addEventListener('focusout', isValidatePw);
pwToggle.addEventListener('click', () => handleClickPwToggle(pwInput, pwToggle));
signInform.addEventListener('submit', (e) => handleLogin(e));
