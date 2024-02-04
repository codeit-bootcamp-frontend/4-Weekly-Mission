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
  setPasswordCheckErrorStyle,
  resetPasswordCheckStyle,
} from './view/error.js';
import { displayPassword } from './view/signin/index.js';

const $emailInput = $('.js-email-input');
const $passwordInput = $('.js-password-input');
const $passwordConfirmInput = $('.js-password-confirm-input');

$emailInput.addEventListener('blur', (e) => {
  const { value } = e.target;

  resetEmailStyle();

  if (value === '') {
    setEmailErrorStyle(MESSAGE.ERROR.EMPTY_EMAIL);
    return;
  }

  if (!REGEX.EMAIL.test(value)) {
    setEmailErrorStyle(MESSAGE.ERROR.REGEX_EMAIL);
    return;
  }

  if ($emailInput.value === TEST_CODE.EMAIL) {
    setEmailErrorStyle(MESSAGE.ERROR.ALREADY_IN_USE_EMAIL);
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

$passwordConfirmInput.addEventListener('blur', (e) => {
  resetPasswordCheckStyle();

  if (e.target.value === '') {
    setPasswordCheckErrorStyle(MESSAGE.ERROR.EMPTY_PASSWORD);
    return;
  }

  if ($passwordInput.value !== e.target.value) {
    setPasswordCheckErrorStyle(MESSAGE.ERROR.MISMATCH_PASSWORD);
  }
});

const $joinButton = $('.js-btn-join');

$emailInput.addEventListener('keydown', (e) => {
  if (e.key === KEY.ENTER) {
    $passwordInput.focus();
  }
});

$passwordInput.addEventListener('keydown', (e) => {
  if (e.key === KEY.ENTER) {
    $passwordConfirmInput.focus();
  }
});

$passwordConfirmInput.addEventListener('keydown', (e) => {
  if (e.key === KEY.ENTER) {
    $joinButton.click();
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

const $btnPasswordConfirmIcon = $('.btn-password-confirm-icon');

$btnPasswordConfirmIcon.addEventListener('click', () => {
  displayPassword(
    $passwordConfirmInput.type,
    $passwordConfirmInput,
    $eyeOpenIcon,
    $eyeCloseIcon
  );
});

$joinButton.addEventListener('click', () => {
  const errorStyle = '1px solid var(--red)';
  const emailStyle = $emailInput.style.border;
  const passwordStyle = $passwordInput.style.border;
  const passwordConfirmStyle = $passwordConfirmInput.style.border;

  if (
    emailStyle === errorStyle ||
    passwordStyle === errorStyle ||
    passwordConfirmStyle === errorStyle
  ) {
    return;
  }

  location.href = './folder.html';
});
