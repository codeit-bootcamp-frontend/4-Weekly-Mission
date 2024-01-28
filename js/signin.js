import { $, SIGN_INFO_REGEX } from './common.js';
import {
  setEmailErrorStyle,
  resetEmailStyle,
  setPasswordErrorStyle,
  resetPasswordStyle,
  styleLoginError,
} from './signErrorStyle.js';
import { hidePassword, showPassword } from './passwordShowStyle.js';

const $jsEmailInput = $('.js-email-input');
const $jsPasswordInput = $('.js-password-input');

$jsEmailInput.addEventListener('blur', (e) => {
  resetEmailStyle();

  if (e.target.value === '') {
    setEmailErrorStyle('이메일을 입력해주세요.');
    return;
  }

  if (!SIGN_INFO_REGEX.email.test(e.target.value)) {
    setEmailErrorStyle('올바른 이메일 주소가 아닙니다.');
    return;
  }
});

$jsPasswordInput.addEventListener('blur', (e) => {
  resetPasswordStyle();

  if (e.target.value === '') {
    setPasswordErrorStyle('비밀번호를 입력해주세요.');
    return;
  }

  if (!SIGN_INFO_REGEX.password.test(e.target.value)) {
    setPasswordErrorStyle('비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
  }
});

const ENTER_KEY = 'Enter';

$jsEmailInput.addEventListener('keydown', (e) => {
  e.key === ENTER_KEY && $jsPasswordInput.focus();
});

$jsPasswordInput.addEventListener('keydown', (e) => {
  const ENTER_KEY = 'Enter';
  e.key === ENTER_KEY && $loginButton.click();
});

const $btnPasswordIcon = $('.btn-password-icon');

$btnPasswordIcon.addEventListener('click', () => {
  if ($jsPasswordInput.type === 'text') {
    hidePassword($jsPasswordInput);
    return;
  }
  if ($jsPasswordInput.type === 'password') {
    showPassword($jsPasswordInput);
  }
});

const $loginButton = $('.js-btn-login');
const TEST_EMAIL_ADDRESS = 'test@codeit.com';

$loginButton.addEventListener('click', () => {
  resetEmailStyle();
  resetPasswordStyle();

  const TEST_PASSWORD = 'codeit101';

  if (
    $jsEmailInput.value !== TEST_EMAIL_ADDRESS ||
    $jsPasswordInput.value !== TEST_PASSWORD
  ) {
    styleLoginError('check');
    return;
  }

  location.href = './folder.html';
});
