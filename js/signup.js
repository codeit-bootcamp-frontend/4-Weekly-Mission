import { $ } from './utils/dom.js';
import { REGEX } from './constants/regex.js';
import { KEY } from './constants/key.js';
import { MESSAGE } from './constants/message.js';
import { POST_API } from './constants/apiRequest.js';
import { API_URL } from './constants/apiUrls.js';

import {
  setEmailErrorStyle,
  resetEmailStyle,
  setPasswordErrorStyle,
  resetPasswordStyle,
  setPasswordCheckErrorStyle,
  resetPasswordCheckStyle,
} from './view/error.js';
import { displayPassword } from './view/signin/index.js';

const getAccessToken = localStorage.getItem('accessToken');
if (getAccessToken) {
  location.href = './folder.html';
}

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

  checkEmail($emailInput.value);
});

const checkEmail = async (inputEmail) => {
  const bodyData = {
    email: inputEmail,
  };
  try {
    const response = await POST_API(API_URL.USER.CHECK_EMAIL, bodyData);

    if (response.status === 409) {
      setEmailErrorStyle(MESSAGE.ERROR.ALREADY_IN_USE_EMAIL);
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

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
  //클래스형태로 수정하기
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

  signup($emailInput.value, $passwordInput.value);
});

const signup = async (email, password) => {
  console.log(`email = ${email} // password = ${password}`);
  const bodyData = {
    email,
    password,
  };
  try {
    const response = await POST_API(API_URL.AUTH.SIGN_UP, loginData);
    const result = JSON.parse(await response.text());

    if (response.status === 200) {
      localStorage.setItem('accessToken', result.data.accessToken);
      location.href = './folder.html';
    }
  } catch (error) {
    console.log(error);
  }
};
