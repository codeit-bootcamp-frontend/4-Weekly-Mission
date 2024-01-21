const QUERY_SELECTOR = function (select) {
  return document.querySelector(select);
};

const $emailInput = QUERY_SELECTOR('#emailInput');
const $emptyEmailError = QUERY_SELECTOR('#emptyEmailError');
const $wrongEmailError = QUERY_SELECTOR('#wrongEmailError');

$emailInput.addEventListener('focusout', function (e) {
  const emailRegEx = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  defaultStyle();

  if (this.value === '') {
    styleSeting('email', 'empty');
  } else if (!emailRegEx.test(this.value)) {
    styleSeting('email', 'wrong');
  }
});

const $passwordInput = QUERY_SELECTOR('#passwordInput');
const $emptyPasswordError = QUERY_SELECTOR('#emptyPasswordError');

$passwordInput.addEventListener('focusout', function (e) {
  defaultStyle();

  if (this.value === '') {
    styleSeting('password');
  }
});

const $loginButton = QUERY_SELECTOR('#btnLogin');
const $checkEmailError = QUERY_SELECTOR('#checkEmailError');
const $checkPasswordError = QUERY_SELECTOR('#checkPasswordError');

function loginBtnClick() {
  defaultStyle();

  if (
    $emailInput.value === 'test@codeit.com' &&
    $passwordInput.value === 'codeit101'
  ) {
    $loginButton.href = './folder.html';
  } else {
    styleSeting('check');
  }
}

function enterkey(type) {
  if (window.event.keyCode == 13) {
    if (type === 'email') {
      QUERY_SELECTOR('#passwordInput').focus();
    } else {
      window.event.preventDefault();
      loginBtnClick();
    }
  }
}

/**
 * 폼 요소 동작에 따른 스타일링
 * string type,
 * 이메일은 error type추가(empty 또는 wrong)
 */
function styleSeting(type, emailErrorType) {
  if (type === 'email' && emailErrorType === 'empty') {
    $emptyEmailError.style.display = 'block';
    $emailInput.style.border = '1px solid var(--red)';
  } else if (type === 'email' && emailErrorType === 'wrong') {
    $wrongEmailError.style.display = 'block';
    $emailInput.style.border = '1px solid var(--red)';
  } else if (type === 'password') {
    $emptyPasswordError.style.display = 'block';
    $passwordInput.style.border = '1px solid var(--red)';
  } else if (type === 'check') {
    $checkEmailError.style.display = 'block';
    $checkPasswordError.style.display = 'block';
    $emailInput.style.border = '1px solid var(--red)';
    $passwordInput.style.border = '1px solid var(--red)';
  }
}

/**
 * 폼 요소 기본 스타일링
 */
function defaultStyle() {
  $emptyEmailError.style.display = 'none';
  $wrongEmailError.style.display = 'none';
  $emailInput.style.border = '1px solid var(--primary)';
  $emptyPasswordError.style.display = 'none';
  $passwordInput.style.border = '1px solid var(--primary)';
  $checkEmailError.style.display = 'none';
  $checkPasswordError.style.display = 'none';
  $emailInput.style.border = '1px solid var(--primary)';
  $passwordInput.style.border = '1px solid var(--primary)';
}

const $btnPasswordIcon = QUERY_SELECTOR('.btn_password_icon');
const $iconEyeOpen = QUERY_SELECTOR('.icon_eye_open');
const $iconEyeClose = QUERY_SELECTOR('.icon_eye_close');

$btnPasswordIcon.addEventListener('click', function () {
  const $passwordClose = QUERY_SELECTOR('.password_close');
  $btnPasswordIcon.classList.toggle('password_close');
  if (!$passwordClose) {
    $passwordInput.type = 'text';
    $iconEyeOpen.style.display = 'none';
    $iconEyeClose.style.display = 'block';
  } else {
    $passwordInput.type = 'password';
    $iconEyeOpen.style.display = 'block';
    $iconEyeClose.style.display = 'none';
  }
});
