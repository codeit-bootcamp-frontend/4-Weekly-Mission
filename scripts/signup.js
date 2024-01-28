import { INPUT_IDS, PASSWORD_MESSAGE } from './constant/signConfig.js';
import { DOMHandler, InputHandler } from './utils/element.js';
import { checkEmail, checkExistEmail, checkValidPassword, deleteRedBox, showErrorMessage } from './utils/sign.js';

const {
  emailElementId,
  passwordElementId,
  passwordCheckElementId,
  emailErrorElementId,
  passwordErrorElementId,
  passwordCheckErrorElementId,
  loginButtonId,
  eyeImageId
} = INPUT_IDS;

/** @type {HTMLInputElement} emailInput*/
const emailElement = DOMHandler.getById(emailElementId);
/** @type {HTMLInputElement} passwordElement*/
const passwordElement = DOMHandler.getById(passwordElementId);
/** @type {HTMLButtonElement} loginButton*/
const passwordCheckElement = DOMHandler.getById(passwordCheckElementId);
/** @type {HTMLButtonElement} loginButton*/
const loginButton = DOMHandler.getById(loginButtonId);
/** @type {HTMLImageElement} eyeImage*/
const eyeImage = DOMHandler.getById(eyeImageId);
DOMHandler.addPAfterElement(emailElement, emailErrorElementId, 'error-text');
DOMHandler.addPAfterElement(passwordElement, passwordErrorElementId, 'error-text');
DOMHandler.addPAfterElement(passwordCheckElement, passwordCheckErrorElementId, 'error-text');
/** @type {HTMLElement} emailErrorElement*/
const emailErrorElement = DOMHandler.getById(emailErrorElementId);
/** @type {HTMLElement} passwordErrorElement*/
const passwordErrorElement = DOMHandler.getById(passwordErrorElementId);
const passwordCheckErrorElement = DOMHandler.getById(passwordCheckErrorElementId);

const handlePasswordCheck = () => {
  if (!InputHandler.isMatchElement(passwordElement, passwordCheckElement))
    showErrorMessage(passwordCheckElement, passwordCheckErrorElement, PASSWORD_MESSAGE.match);
};

emailElement?.addEventListener('focusout', () => checkEmail(emailElement, emailErrorElement));
emailElement?.addEventListener('focusout', () => checkExistEmail(emailElement, emailErrorElement));
emailElement?.addEventListener('focusin', () => deleteRedBox(emailElement));
passwordElement?.addEventListener('focusout', () => checkValidPassword(passwordElement, passwordErrorElement));
passwordElement?.addEventListener('focusin', () => deleteRedBox(passwordElement));
passwordCheckElement?.addEventListener('focusout', handlePasswordCheck);
