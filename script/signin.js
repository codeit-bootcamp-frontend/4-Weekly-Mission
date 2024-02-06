import { EMAIL_ERROR_MESSAGE, PASSWORD_ERROR_MESSAGE } from './constant.js';
import { getElementById } from './dom/domhelper.js';
import { checkAccessToken, postSignInData } from './functions/apiUtils.js';
import { isEmptyString, isValidEmail, showError, hideError, showPassword, hidePassword } from './functions/sign.js';

// About Email Error
const emailInput = getElementById('email');
const emailErrorMessage = getElementById('emailErrorMessage');

// About Password Error
const passwordInput = getElementById('password');
const passwordErrorMessage = getElementById('passwordErrorMessage');

// About Button
const loginButton = getElementById('login-button');
const eyeButton = getElementById('eye-button');

checkAccessToken();

const EmailInputError = () => {
  const emailValue = emailInput.value.trim();
  if (isEmptyString(emailValue)) {
    showError(emailInput, emailErrorMessage, EMAIL_ERROR_MESSAGE.isEmpty);
    return;
  }
  if (!isValidEmail(emailValue)) {
    showError(emailInput, emailErrorMessage, EMAIL_ERROR_MESSAGE.isNotRightFormat);
    return;
  }
  hideError(emailInput, emailErrorMessage);
};

const passwordInputError = () => {
  const passwordValue = passwordInput.value.trim();
  if (isEmptyString(passwordValue)) {
    showError(passwordInput, passwordErrorMessage, PASSWORD_ERROR_MESSAGE.isEmpty);
    return;
  }
  hideError(passwordInput, passwordErrorMessage);
};

const pressSignInButtonError = event => {
  event.preventDefault();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  // 겹치는 내용이라고 임의로 판단해서 주석 처리.
  // if (USERS[0].id === emailValue && USERS[0].password === passwordValue) {
  //     window.location.href = goToFolderhtml; return;}
  const checkTemporary = { emailValue, passwordValue };
  postSignInData('/api /sign-in', checkTemporary);
  showError(emailInput, emailErrorMessage, EMAIL_ERROR_MESSAGE.haveToCheck);
  showError(passwordInput, passwordErrorMessage, PASSWORD_ERROR_MESSAGE.haveToCheck);
};

const pressEyeButton = () => {
  if (passwordInput.type === 'text') {
    showPassword(passwordInput, eyeButton);
    return;
  }
  hidePassword(passwordInput, eyeButton);
};

// 이벤트 함수 분리
emailInput.addEventListener('focusout', EmailInputError);
passwordInput.addEventListener('focusout', passwordInputError);
loginButton.addEventListener('click', pressSignInButtonError);
eyeButton.addEventListener('click', pressEyeButton);
