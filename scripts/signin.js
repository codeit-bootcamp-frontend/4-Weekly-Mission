//@ts-check
import { DOMHandler, InputHandler } from './utils/element.js';
import { EMAIL_MESSAGE, USERS, PASSWORD_MESSAGE, loginAction, INPUT_IDS } from './constant/signConfig.js';
import {
  checkEmail,
  checkEmptyPassword,
  deleteRedBox,
  isValidUser,
  showErrorMessage,
  toggleImage
} from './utils/sign.js';

const {
  emailElementId,
  passwordElementId,
  emailErrorElementId,
  passwordErrorElementId,
  loginButtonId,
  eyeImagePasswordId
} = INPUT_IDS;

/** @type {HTMLInputElement} emailInput*/
const emailElement = DOMHandler.getById(emailElementId);
/** @type {HTMLInputElement} passwordElement*/
const passwordElement = DOMHandler.getById(passwordElementId);
/** @type {HTMLButtonElement} loginButton*/
const loginButton = DOMHandler.getById(loginButtonId);
/** @type {HTMLImageElement} eyeImage*/
const eyeImagePassword = DOMHandler.getById(eyeImagePasswordId);
DOMHandler.addPAfterElement(emailElement, emailErrorElementId, 'error-text');
DOMHandler.addPAfterElement(passwordElement, passwordErrorElementId, 'error-text');
/** @type {HTMLElement} emailErrorElement*/
const emailErrorElement = DOMHandler.getById(emailErrorElementId);
/** @type {HTMLElement} passwordErrorElement*/
const passwordErrorElement = DOMHandler.getById(passwordErrorElementId);

const handleSubmit = event => {
  event.preventDefault();
  const isValid = isValidUser(USERS, emailElement, passwordElement);
  if (isValid) {
    loginAction();
    return;
  }
  showErrorMessage(emailElement, emailErrorElement, EMAIL_MESSAGE.fail);
  showErrorMessage(passwordElement, passwordErrorElement, PASSWORD_MESSAGE.fail);
};

emailElement?.addEventListener('focusout', () => checkEmail(emailElement, emailErrorElement));
emailElement?.addEventListener('focusin', () => deleteRedBox(emailElement));
passwordElement?.addEventListener('focusout', () => checkEmptyPassword(passwordElement, passwordErrorElement));
passwordElement?.addEventListener('focusin', () => deleteRedBox(passwordElement));
eyeImagePassword?.addEventListener('click', () => toggleImage(passwordElement, eyeImagePassword));
loginButton?.addEventListener('submit', handleSubmit);
