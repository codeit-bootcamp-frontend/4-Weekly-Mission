import { REGEX, USER_INFO } from './constant.js';

export const validateEmail = email => {
  return email.match(REGEX.EMAIL);
};

export const validatePassword = password => {
  return password.match(REGEX.PASSWORD);
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

export const checkValueMatch = (firstElement, secondElement) => {
  return firstElement.value === secondElement.value;
};

export const checkUserInfo = (idElement, passwordElement) => {
  return idElement.value === USER_INFO.ID && passwordElement.value === USER_INFO.PASSWORD;
};

export const checkUserId = idElement => {
  return idElement.value === USER_INFO.ID;
};
