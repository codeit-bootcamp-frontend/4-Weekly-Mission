import { ERROR_MESSAGE, PATH } from './constant.js';
import { validateEmail, showInputError, showErrorMessage, hideInputError, changeImage } from './util.js';

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

//Check password: 입력 여부 확인-----------------------------------------------
export const checkPassword = (passwordElement, errorMessageElement) => {
  if (!passwordElement.value) {
    showInputError(passwordElement);
    showErrorMessage(errorMessageElement, ERROR_MESSAGE.EMPTY_PASSWORD);
    return;
  }
  hideInputError(passwordElement, errorMessageElement);
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
