import { $ } from '../utils/dom.js';
import { MESSAGE } from '../constants/message.js';

const $emailErrorMsg = $('.js-email-error-msg');
const $passwordErrorMsg = $('.js-password-error-msg');
const $passwordConfirmErrorMsg = $('.js-password-confirm-error-msg');
const $emailInput = $('.js-email-input');
const $passwordInput = $('.js-password-input');
const $passwordConfirmInput = $('.js-password-confirm-input');

export const setEmailErrorStyle = (msg) => {
  $emailErrorMsg.textContent = msg;
  $emailErrorMsg.classList.remove('display-hidden');
  $emailInput.classList.add('border-red');
};

export const resetEmailStyle = () => {
  $emailErrorMsg.classList.add('display-hidden');
  $emailInput.classList.remove('border-red');
};

export const setPasswordErrorStyle = (msg) => {
  $passwordErrorMsg.textContent = msg;
  $passwordErrorMsg.classList.remove('display-hidden');
  $passwordInput.classList.add('border-red');
};

export const resetPasswordStyle = () => {
  $passwordInput.classList.remove('border-red');
  $passwordErrorMsg.classList.add('display-hidden');
};

export const setPasswordCheckErrorStyle = (msg) => {
  $passwordConfirmErrorMsg.textContent = msg;
  $passwordConfirmErrorMsg.classList.remove('display-hidden');
  $passwordConfirmInput.classList.add('border-red');
};

export const resetPasswordCheckStyle = () => {
  $passwordConfirmInput.classList.remove('border-red');
  $passwordConfirmErrorMsg.classList.add('display-hidden');
};

export const resetStyleLoginError = () => {
  $emailErrorMsg.textContent = MESSAGE.ERROR.CHECK_AGAIN_EMAIL;
  $emailErrorMsg.classList.remove('display-hidden');
  $emailInput.classList.add('border-red');

  $passwordErrorMsg.textContent = MESSAGE.ERROR.CHECK_AGAIN_PASSWORD;
  $passwordErrorMsg.classList.remove('display-hidden');
  $passwordInput.classList.add('border-red');
};
