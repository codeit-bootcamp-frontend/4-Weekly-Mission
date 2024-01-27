import { $ } from './common.js';
// const $ = (select, el = document) => el.querySelector(select);
// console.log(a);
const $emailInput = $('#email-input');
const $emptyEmailErrorMsg = $('.empty-email-error-msg');
const $wrongEmailErrorMsg = $('.wrong-email-error-msg');

$emailInput.addEventListener('blur', (e) => {
  const EMAIL_REGEX = {
    email: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/,
  };

  resetEmailStyle();

  if (e.target.value === '') {
    setEmptyEmailStyle();
    return;
  }
  if (!EMAIL_REGEX.email.test(e.target.value)) {
    setWrongEmailStyle();
  }
});

const setEmptyEmailStyle = () => {
  $emptyEmailErrorMsg.style.display = 'block';
  $emailInput.style.border = '1px solid var(--red)';
};

const setWrongEmailStyle = () => {
  $wrongEmailErrorMsg.style.display = 'block';
  $emailInput.style.border = '1px solid var(--red)';
};

const $passwordInput = $('#passwordInput');
const $emptyPasswordErrorMsg = $('.empty-password-error-msg');

$passwordInput.addEventListener('blur', (e) => {
  resetPasswordStyle();

  if (e.target.value === '') {
    setEmptyPasswordStyle('password');
  }
});

const setEmptyPasswordStyle = () => {
  $emptyPasswordErrorMsg.style.display = 'block';
  $passwordInput.style.border = '1px solid var(--red)';
};

const resetPasswordStyle = () => {
  $passwordInput.style.border = '1px solid var(--primary)';
  $emptyPasswordErrorMsg.style.display = 'none';
  $checkPasswordErrorMsg.style.display = 'none';
};

const resetEmailStyle = () => {
  $emptyEmailErrorMsg.style.display = 'none';
  $wrongEmailErrorMsg.style.display = 'none';
  $checkEmailErrorMsg.style.display = 'none';
  $emailInput.style.border = '1px solid var(--primary)';
};

const $loginButton = $('.js-btn-login');
const $checkEmailErrorMsg = $('.check-email-error-msg');
const $checkPasswordErrorMsg = $('.check-password-error-msg');

const loginBtnClick = () => {
  resetEmailStyle();
  resetPasswordStyle();

  const TEST_EMAIL_ADDRESS = 'test@codeit.com';
  const TEST_PASSWORD = 'codeit101';

  if (
    $emailInput.value !== TEST_EMAIL_ADDRESS ||
    $passwordInput.value !== TEST_PASSWORD
  ) {
    styleLoginError('check');
    return;
  }

  location.href = './folder.html';
};

const styleLoginError = () => {
  $checkEmailErrorMsg.style.display = 'block';
  $checkPasswordErrorMsg.style.display = 'block';
  $emailInput.style.border = '1px solid var(--red)';
  $passwordInput.style.border = '1px solid var(--red)';
};

$emailInput.addEventListener('keydown', (e) => {
  const ENTER_KEY = 'Enter';
  e.key === ENTER_KEY && $('#passwordInput').focus();
});

const $btnPasswordIcon = $('.btn-password-icon');
const $iconEyeOpen = $('.icon-eye-open');
const $iconEyeClose = $('.icon-eye-close');

$btnPasswordIcon.addEventListener('click', () => {
  if ($passwordInput.type === 'text') {
    hidePassword();
    return;
  }
  if ($passwordInput.type === 'password') {
    showPassword();
  }
});

const hidePassword = () => {
  $passwordInput.type = 'password';
  $iconEyeOpen.style.display = 'block';
  $iconEyeClose.style.display = 'none';
};

const showPassword = () => {
  $passwordInput.type = 'text';
  $iconEyeOpen.style.display = 'none';
  $iconEyeClose.style.display = 'block';
};
