import { REGEX_EMAIL, USER_INFO } from './constant.js';

export const validateEmail = email_address => {
  return email_address.match(REGEX_EMAIL);
};

export const showInputError = inputElement => {
  inputElement.classList.add('error-input');
};

export const showErrorMessage = (messageElement, message) => {
  messageElement.classList.remove('hidden');
  messageElement.textContent = message;
};

export const hideInputError = (inputElement, messageElement) => {
  inputElement.classList.remove('error-input');
  messageElement.classList.add('hidden');
};

export const changeImage = (imageElement, imageSrc) => {
  imageElement.setAttribute('src', imageSrc);
};

export const checkUserInfo = (idElement, passwordElement) => {
  return idElement.value === USER_INFO.ID && passwordElement.value === USER_INFO.PASSWORD;
};

export const checkUserId = idElement => {
  return idElement.value === USER_INFO.ID;
};
