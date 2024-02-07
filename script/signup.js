import { EMAIL_ERROR_MESSAGE, PASSWORD_CONFIRM_ERROR_MESSAGE, PASSWORD_ERROR_MESSAGE } from './constant.js';
import { getElementById } from './dom/domhelper.js';
import { checkEmailData, checkAccessToken, postSignData } from './functions/apiUtils.js';
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

checkAccessToken(goToFolderhtml);

const emailInputError = () => {
  const emailValue = emailInput.value.trim();
  if (isEmptyString(emailValue)) {
    showError(emailInput, emailErrorMessage, EMAIL_ERROR_MESSAGE.isEmpty);
    return false;
  }
  if (!isValidEmail(emailValue)) {
    showError(emailInput, emailErrorMessage, EMAIL_ERROR_MESSAGE.isNotRightFormat);
    return false;
  }
  hideError(emailInput, emailErrorMessage);
  return true;
};

const passwordInputError = () => {
  const passwordValue = passwordInput.value.trim();
  if (isEmptyString(passwordValue)) {
    showError(passwordInput, passwordErrorMessage, PASSWORD_ERROR_MESSAGE.isEmpty);
    return false;
  }
  if (!isValidPassword(passwordValue)) {
    showError(passwordInput, passwordErrorMessage, PASSWORD_ERROR_MESSAGE.isNotRightFormat);
    return false;
  }
  hideError(passwordInput, passwordErrorMessage);
  return true;
};

const passwordConfirmInputError = () => {
  const passwordValue = passwordInput.value.trim();
  const passwordConfirmValue = passwordConfirmInput.value.trim();
  if (passwordValue !== passwordConfirmValue) {
    showError(passwordConfirmInput, passwordConfirmErrorMessage, PASSWORD_CONFIRM_ERROR_MESSAGE.isNotMatch);
    return false;
  }
  hideError(passwordConfirmInput, passwordConfirmErrorMessage);
  return true;
};


const pressSignUpButtonError = async event => {
  event.preventDefault();

  const isEmailValid = emailInputError();
  const isPasswordValid = passwordInputError();
  const isPasswordConfirmValid = passwordConfirmInputError();

  if (isEmailValid && isPasswordValid && isPasswordConfirmValid){
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const emailInfo = { 'email' : emailValue}
    const signInfo = { 'email': emailValue, 'password': passwordValue };
    try {
        const isEmailAvailable = await checkEmailData('/check-email', emailInfo);
        console.log(isEmailAvailable);
        if (!isEmailAvailable) {
          await postSignData('/sign-up', signInfo);
        }
    } catch (error) {
      console.error('Error occurred during sign-up :', error)
    }
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

emailInput.addEventListener('focusout', emailInputError);
passwordInput.addEventListener('focusout', passwordInputError);
passwordConfirmInput.addEventListener('focusout', passwordConfirmInputError);
signInButton.addEventListener('click', pressSignUpButtonError);
eyeButtonPassword.addEventListener('click', pressEyeButton);
eyeButtonForConfirm.addEventListener('click', pressEyeButtonForConfirm);
