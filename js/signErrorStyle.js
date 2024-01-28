import { $ } from './common.js';

const $jsEmailErrorMsg = $('.js-email-error-msg');
const $jsPasswordErrorMsg = $('.js-password-error-msg');
const $jsPasswordCheckErrorMsg = $('.js-password-check-error-msg');
const $jsEmailInput = $('.js-email-input');
const $jsPasswordInput = $('.js-password-input');
const $jsPasswordCheckInput = $('.js-password-check-input');

const setEmailErrorStyle = (msg) => {
  $jsEmailErrorMsg.textContent = msg;
  $jsEmailErrorMsg.style.display = 'block';
  $jsEmailInput.style.border = '1px solid var(--red)';
};

const resetEmailStyle = () => {
  $jsEmailErrorMsg.style.display = 'none';
  $jsEmailInput.style.border = '1px solid var(--primary)';
};

const setPasswordErrorStyle = (msg) => {
  $jsPasswordErrorMsg.textContent = msg;
  $jsPasswordErrorMsg.style.display = 'block';
  $jsPasswordInput.style.border = '1px solid var(--red)';
};

const resetPasswordStyle = () => {
  $jsPasswordInput.style.border = '1px solid var(--primary)';
  $jsPasswordErrorMsg.style.display = 'none';
};

const setPasswordCheckErrorStyle = (msg) => {
  $jsPasswordCheckErrorMsg.textContent = msg;
  $jsPasswordCheckErrorMsg.style.display = 'block';
  $jsPasswordCheckInput.style.border = '1px solid var(--red)';
};

const resetPasswordCheckStyle = () => {
  $jsPasswordCheckInput.style.border = '1px solid var(--primary)';
  $jsPasswordCheckErrorMsg.style.display = 'none';
};

const styleLoginError = () => {
  $jsEmailErrorMsg.textContent = '이메일을 확인해주세요.';
  $jsEmailErrorMsg.style.display = 'block';
  $jsEmailInput.style.border = '1px solid var(--red)';

  $jsPasswordErrorMsg.textContent = '비밀번호를 확인해주세요.';
  $jsPasswordErrorMsg.style.display = 'block';
  $jsPasswordInput.style.border = '1px solid var(--red)';
};

export {
  setEmailErrorStyle,
  resetEmailStyle,
  setPasswordErrorStyle,
  resetPasswordStyle,
  setPasswordCheckErrorStyle,
  resetPasswordCheckStyle,
  styleLoginError,
};
