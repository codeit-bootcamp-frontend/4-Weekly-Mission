//@ts-check
import { DOMHandler, InputHandler } from './utils.js/element.js';
import { EMAIL_MESSAGE, USERS, PASSWORD_MESSAGE, loginAction, INPUT_IDS } from './constant/signConfig.js';
import {
  checkEmailInput,
  checkPasswordInput,
  deleteRedBox,
  isUserSignedUp,
  showErrorMessage,
  toggleImage
} from './utils.js/sign.js';

const { emailElementId, passwordElementId, emailErrorElementId, passwordErrorElementId, loginButtonId, eyeImageId } =
  INPUT_IDS;

/** @type {HTMLInputElement} emailInput*/
const emailElement = DOMHandler.getById(emailElementId);
/** @type {HTMLInputElement} passwordElement*/
const passwordElement = DOMHandler.getById(passwordElementId);
/** @type {HTMLButtonElement} loginButton*/
const loginButton = DOMHandler.getById(loginButtonId);
/** @type {HTMLImageElement} eyeImage*/
const eyeImage = DOMHandler.getById(eyeImageId);
DOMHandler.addPAfterElement(emailElement, emailErrorElementId, 'error-text');
DOMHandler.addPAfterElement(passwordElement, passwordErrorElementId, 'error-text');
/** @type {HTMLElement} emailErrorElement*/
const emailErrorElement = DOMHandler.getById(emailErrorElementId);
/** @type {HTMLElement} passwordErrorElement*/
const passwordErrorElement = DOMHandler.getById(passwordErrorElementId);

const handleLogin = (event, emailElement, passwordElement) => {
  event?.preventDefault();
  const isSignedUp = isUserSignedUp(USERS, emailElement, passwordElement);
  if (isSignedUp) {
    loginAction();
    return;
  }
  showErrorMessage(emailElement, emailErrorElement, EMAIL_MESSAGE.fail);
  showErrorMessage(passwordElement, passwordErrorElement, PASSWORD_MESSAGE.fail);
};

emailElement?.addEventListener('focusout', () => checkEmailInput(emailElement, emailErrorElement));
emailElement?.addEventListener('focusin', () => deleteRedBox(emailElement));
passwordElement?.addEventListener('focusout', () => checkPasswordInput(passwordElement, passwordErrorElement));
passwordElement?.addEventListener('focusin', () => deleteRedBox(passwordElement));
eyeImage?.addEventListener('click', () => toggleImage(passwordElement, eyeImage));
loginButton?.addEventListener('click', event => handleLogin(event, emailElement, passwordElement));
