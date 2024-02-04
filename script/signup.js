import { EMAIL_ERROR_MESSAGE, PASSWORD_CONFIRM_ERROR_MESSAGE, PASSWORD_ERROR_MESSAGE } from './constant.js';
import { getElementById } from './dom/domhelper.js';
import { checkEmailData, myLocalStorageHaveAccessToken } from './functions/apiUtils.js';
import {
  isEmptyString,
  isValidEmail,
  showError,
  hideError,
  isValidPassword,
  hidePassword,
  showPassword,
  isValidEmailFormat,
  isValidPasswordFormat,
  isValidPasswordConfirmFormat,
} from './functions/sign.js';

// About Email Error
const emailInput = getElementById('email');
const emailErrorMessage = getElementById('emailErrorMessage');

// About Password Error
const passwordInput = getElementById('password');
const passwordErrorMessage = getElementById('passwordErrorMessage');

// About Password Confirm Error
const passwordConfirmInput = getElementById('password_comfirm');
const passwordConfirmErrorMessage = getElementById('passwordConfirmErrorMessage');

// About Button
const signInButton = getElementById('sign-up-button');
const eyeButtonPassword = getElementById('eye-button-password');
const eyeButtonForConfirm = getElementById('eye-button-password-confirm');

myLocalStorageHaveAccessToken();

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
  if (emailValue === 'test@codeit.com') {
    showError(emailInput, emailErrorMessage, EMAIL_ERROR_MESSAGE.isUsing);
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
  if (!isValidPassword(passwordValue)) {
    showError(passwordInput, passwordErrorMessage, PASSWORD_ERROR_MESSAGE.isNotRightFormat);
    return;
  }
  hideError(passwordInput, passwordErrorMessage);
};

const passwordConfirmInputError = () => {
  const passwordValue = passwordInput.value.trim();
  const passwordConfirmValue = passwordConfirmInput.value.trim();
  if (passwordValue !== passwordConfirmValue) {
    showError(passwordConfirmInput, passwordConfirmErrorMessage, PASSWORD_CONFIRM_ERROR_MESSAGE.isNotMatch);
    return;
  }
  hideError(passwordConfirmInput, passwordConfirmErrorMessage);
};

const pressSignUpButtonError = event => {
  event.preventDefault();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const passwordConfirmValue = passwordConfirmInput.value.trim();
  const submitTemporary = { emailValue, passwordValue };
  if (isValidEmailFormat(emailValue) && isValidPasswordFormat(passwordValue) && isValidPasswordConfirmFormat(passwordValue, passwordConfirmValue)) {
    checkEmailData('/api/check-email', emailValue, submitTemporary);
  }
};

const pressEyeButton = () => {
  if (passwordInput.type === 'text') {
    showPassword(passwordInput, eyeButtonPassword);
    return;
  }
  hidePassword(passwordInput, eyeButtonPassword);
};

const pressEyeButtonForConfirm = () => {
  if (passwordConfirmInput.type === 'text') {
    showPassword(passwordConfirmInput, eyeButtonForConfirm);
    return;
  }
  hidePassword(passwordConfirmInput, eyeButtonForConfirm);
};

emailInput.addEventListener('focusout', EmailInputError);
passwordInput.addEventListener('focusout', passwordInputError);
passwordConfirmInput.addEventListener('focusout', passwordConfirmInputError);
signInButton.addEventListener('click', pressSignUpButtonError);
eyeButtonPassword.addEventListener('click', pressEyeButton);
eyeButtonForConfirm.addEventListener('click', pressEyeButtonForConfirm);
