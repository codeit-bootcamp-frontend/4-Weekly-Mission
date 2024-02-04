import { $ } from './utils/dom.js';
import { REGEX } from './constants/regex.js';
import { KEY } from './constants/key.js';
import { MESSAGE } from './constants/message.js';
import { TEST_CODE } from './constants/testCode.js';

import {
  setEmailErrorStyle,
  resetEmailStyle,
  setPasswordErrorStyle,
  resetPasswordStyle,
  resetStyleLoginError,
} from './view/error.js';
import { displayPassword } from './view/signin/index.js';

const $emailInput = $('.js-email-input');
const $passwordInput = $('.js-password-input');

$emailInput.addEventListener('blur', (e) => {
  const { value } = e.target;
  resetEmailStyle();

  if (value === '') {
    setEmailErrorStyle(MESSAGE.ERROR.EMPTY_EMAIL);
    return;
  }

  if (!REGEX.EMAIL.test(value)) {
    setEmailErrorStyle(MESSAGE.ERROR.REGEX_EMAIL);
  }
});

$passwordInput.addEventListener('blur', (e) => {
  const { value } = e.target;
  resetPasswordStyle();

  if (value === '') {
    setPasswordErrorStyle(MESSAGE.ERROR.EMPTY_PASSWORD);
    return;
  }

  if (!REGEX.PASSWORD.test(value)) {
    setPasswordErrorStyle(MESSAGE.ERROR.REGEX_PASSWORD);
  }
});

$emailInput.addEventListener('keydown', (e) => {
  if (e.key === KEY.ENTER) {
    $passwordInput.focus();
  }
});

$passwordInput.addEventListener('keydown', (e) => {
  if (e.key === KEY.ENTER) {
    $loginButton.click();
  }
});

const $btnPasswordIcon = $('.btn-password-icon');
const $eyeOpenIcon = $('.eye-open-icon');
const $eyeCloseIcon = $('.eye-close-icon');

$btnPasswordIcon.addEventListener('click', () => {
  displayPassword(
    $passwordInput.type,
    $passwordInput,
    $eyeOpenIcon,
    $eyeCloseIcon
  );
});

const $loginButton = $('.js-btn-login');

$loginButton.addEventListener('click', () => {
  resetEmailStyle();
  resetPasswordStyle();

  if (
    $emailInput.value !== TEST_CODE.EMAIL ||
    $passwordInput.value !== TEST_CODE.PASSWORD
  ) {
    resetStyleLoginError();
    return;
  }

  location.href = './folder.html';
});
