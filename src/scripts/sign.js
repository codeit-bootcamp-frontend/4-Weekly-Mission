import { ERROR_MESSAGE, PATH } from './constant.js';
import {
  validateEmail,
  validatePassword,
  showInputError,
  showErrorMessage,
  hideInputError,
  changeImage,
  checkUserId,
  checkValueMatch,
} from './util.js';
import { checkEmailInfo } from './api.js';

//Check email: 입력 여부 확인, 메일 형식 확인-------------------------------------
export const checkEmail = (emailElement, errorMessageElement) => {
  if (!emailElement.value) {
    showInputError(emailElement);
    showErrorMessage(errorMessageElement, ERROR_MESSAGE.EMPTY_EMAIL);
    return;
  }
  if (!validateEmail(emailElement.value)) {
    showInputError(emailElement);
    showErrorMessage(errorMessageElement, ERROR_MESSAGE.INVALID_EMAIL_ADDRESS);
    return;
  }
  hideInputError(emailElement, errorMessageElement);
};

export const checkAvailableEmail = (emailElement, errorMessageElement) => {
  const emailInfo = { email: emailElement.value };
  if (emailElement.value) {
    checkEmailInfo('/check-email', emailInfo)
      .then((result) => {
        if (!result) {
          showErrorMessage(errorMessageElement, ERROR_MESSAGE.UNAVAILABLE_EMAIL);
        }
      });
  }
};

//Check password: 입력 여부 확인-----------------------------------------------
export const checkPassword = (passwordElement, errorMessageElement) => {
  if (!passwordElement.value) {
    showInputError(passwordElement);
    showErrorMessage(errorMessageElement, ERROR_MESSAGE.EMPTY_PASSWORD);
    return;
  }
  hideInputError(passwordElement, errorMessageElement);
};

export const checkAvailablePassword = (passwordElement, errorMessageElement) => {
  if (!validatePassword(passwordElement.value) && passwordElement.value) {
    showInputError(passwordElement);
    showErrorMessage(errorMessageElement, ERROR_MESSAGE.UNAVAILABLE_PASSWORD);
  }
};

//Check passwordCheck: 입력 여부 및 값 확인--------------------------------------
export const checkPasswordMatch = (passwordElement, passwordCheckElement, errorMessageElement) => {
  if (!checkValueMatch(passwordElement, passwordCheckElement) && passwordCheckElement.value) {
    showInputError(passwordCheckElement);
    showErrorMessage(errorMessageElement, ERROR_MESSAGE.MISMATCH_PASSWORD);
  }
};

//Change icon: eye-on/off---------------------------------------------------
export const changeEyeIcon = (eyeIconElement, passwordElement) => {
  eyeIconElement.classList.toggle('on');
  if (eyeIconElement.classList.contains('on')) {
    passwordElement.setAttribute('type', 'text');
    changeImage(eyeIconElement, PATH.ICON_EYE_ON);
    return;
  }
  passwordElement.setAttribute('type', 'password');
  changeImage(eyeIconElement, PATH.ICON_EYE_OFF);
};