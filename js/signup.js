import { $, SIGN_INFO_REGEX } from './common.js';
import {
  setEmailErrorStyle,
  resetEmailStyle,
  setPasswordErrorStyle,
  resetPasswordStyle,
  setPasswordCheckErrorStyle,
  resetPasswordCheckStyle,
} from './signErrorStyle.js';
import { hidePassword, showPassword } from './passwordShowStyle.js';

const $jsEmailInput = $('.js-email-input');
const $jsPasswordInput = $('.js-password-input');
const $jsPasswordCheckInput = $('.js-password-check-input');

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

  if ($jsEmailInput.value === TEST_EMAIL_ADDRESS) {
    setEmailErrorStyle('이미 사용 중인 이메일입니다.');
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

$jsPasswordCheckInput.addEventListener('blur', (e) => {
  resetPasswordCheckStyle();

  if (e.target.value === '') {
    setPasswordCheckErrorStyle('비밀번호를 입력해주세요.');
    return;
  }

  if ($jsPasswordInput.value !== e.target.value) {
    setPasswordCheckErrorStyle('비밀번호가 일치하지 않아요.');
  }
});

const $joinButton = $('.js-btn-join');
const TEST_EMAIL_ADDRESS = 'test@codeit.com';

const ENTER_KEY = 'Enter';
$jsEmailInput.addEventListener('keydown', (e) => {
  e.key === ENTER_KEY && $jsPasswordInput.focus();
});

$jsPasswordInput.addEventListener('keydown', (e) => {
  e.key === ENTER_KEY && $jsPasswordCheckInput.focus();
});

$jsPasswordCheckInput.addEventListener('keydown', (e) => {
  e.key === ENTER_KEY && $joinButton.click();
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

const $btnPasswordCheckIcon = $('.btn-password-check-icon');

$btnPasswordCheckIcon.addEventListener('click', () => {
  if ($jsPasswordCheckInput.type === 'text') {
    hidePassword($jsPasswordCheckInput);
    return;
  }
  if ($jsPasswordCheckInput.type === 'password') {
    showPassword($jsPasswordCheckInput);
  }
});

$joinButton.addEventListener('click', () => {
  const errorStyle = '1px solid var(--red)';
  const emailStyle = $jsEmailInput.style.border;
  const passwordStyle = $jsPasswordInput.style.border;
  const passwordCheckStyle = $jsPasswordCheckInput.style.border;

  if (
    emailStyle === errorStyle ||
    passwordStyle === errorStyle ||
    passwordCheckStyle === errorStyle
  ) {
    return;
  }

  location.href = './folder.html';
});
