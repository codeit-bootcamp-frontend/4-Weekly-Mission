//@ts-check
import { DOMHandler } from './utils/element.js';
import { EMAIL_MESSAGE, USERS, PASSWORD_MESSAGE, loginAction, INPUT_IDS } from './constant/signConfig.js';
import { SignHandler } from './utils/sign.js';

const {
  emailElementId,
  passwordElementId,
  emailErrorElementId,
  passwordErrorElementId,
  loginFormId,
  eyeImagePasswordId
} = INPUT_IDS;

/** @type {HTMLInputElement} emailInput*/
const emailElement = DOMHandler.getById(emailElementId);
/** @type {HTMLInputElement} passwordElement*/
const passwordElement = DOMHandler.getById(passwordElementId);
/** @type {HTMLButtonElement} loginForm*/
const loginForm = DOMHandler.getById(loginFormId);
/** @type {HTMLImageElement} eyeImagePassword*/
const eyeImagePassword = DOMHandler.getById(eyeImagePasswordId);
DOMHandler.addPAfterElement(emailElement, emailErrorElementId, 'error-text');
DOMHandler.addPAfterElement(passwordElement, passwordErrorElementId, 'error-text');
/** @type {HTMLElement} emailErrorElement*/
const emailErrorElement = DOMHandler.getById(emailErrorElementId);
/** @type {HTMLElement} passwordErrorElement*/
const passwordErrorElement = DOMHandler.getById(passwordErrorElementId);

/** @param {Event} event*/
const handleSubmit = event => {
  event.preventDefault();
  passwordElement.blur();
  emailElement.blur();
  const isValid = SignHandler.isValidUser(USERS, emailElement, passwordElement);
  if (isValid) {
    loginAction();
    return;
  }
  SignHandler.showErrorMessage(emailElement, emailErrorElement, EMAIL_MESSAGE.fail);
  SignHandler.showErrorMessage(passwordElement, passwordErrorElement, PASSWORD_MESSAGE.fail);
};

emailElement?.addEventListener('focusout', () => SignHandler.checkEmail(emailElement, emailErrorElement));
emailElement?.addEventListener('focusin', () => SignHandler.deleteRedBox(emailElement));
passwordElement?.addEventListener('focusout', () =>
  SignHandler.checkEmptyPassword(passwordElement, passwordErrorElement)
);
passwordElement?.addEventListener('focusin', () => SignHandler.deleteRedBox(passwordElement));
eyeImagePassword?.addEventListener('click', () => SignHandler.toggleImage(passwordElement, eyeImagePassword));
loginForm?.addEventListener('submit', handleSubmit);
