import {
  EMAIL_REGEX,
  INPUT_IDS,
  PASSWORD_MESSAGE,
  PASSWORD_REGEX,
  USERS,
  loginAction,
  signUpAction
} from './constant/signConfig.js';
import { DOMHandler, InputHandler } from './utils/element.js';
import {
  checkEmail,
  checkExistEmail,
  checkValidPassword,
  deleteRedBox,
  isExistEmail,
  showErrorMessage,
  toggleImage
} from './utils/sign.js';

const {
  emailElementId,
  passwordElementId,
  passwordCheckElementId,
  emailErrorElementId,
  passwordErrorElementId,
  passwordCheckErrorElementId,
  loginFormId,
  eyeImagePasswordId,
  eyeImagePasswordCheckId
} = INPUT_IDS;

/** @type {HTMLInputElement} emailInput*/
const emailElement = DOMHandler.getById(emailElementId);
/** @type {HTMLInputElement} passwordElement*/
const passwordElement = DOMHandler.getById(passwordElementId);
/** @type {HTMLButtonElement} loginButton*/
const passwordCheckElement = DOMHandler.getById(passwordCheckElementId);
/** @type {HTMLButtonElement} loginButton*/
const loginForm = DOMHandler.getById(loginFormId);
/** @type {HTMLImageElement} eyeImage*/
const eyeImagePassword = DOMHandler.getById(eyeImagePasswordId);
const eyeImagePasswordCheck = DOMHandler.getById(eyeImagePasswordCheckId);
DOMHandler.addPAfterElement(emailElement, emailErrorElementId, 'error-text');
DOMHandler.addPAfterElement(passwordElement, passwordErrorElementId, 'error-text');
DOMHandler.addPAfterElement(passwordCheckElement, passwordCheckErrorElementId, 'error-text');
/** @type {HTMLElement} emailErrorElement*/
const emailErrorElement = DOMHandler.getById(emailErrorElementId);
/** @type {HTMLElement} passwordErrorElement*/
const passwordErrorElement = DOMHandler.getById(passwordErrorElementId);
const passwordCheckErrorElement = DOMHandler.getById(passwordCheckErrorElementId);

const handlePasswordCheck = () => {
  if (!InputHandler.isMatchElement(passwordElement, passwordCheckElement)) {
    showErrorMessage(passwordCheckElement, passwordCheckErrorElement, PASSWORD_MESSAGE.match);
  }
};

const handleSignUp = event => {
  event.preventDefault();
  const checkEmail = InputHandler.isMatchRegEx(emailElement, EMAIL_REGEX) && !isExistEmail(USERS, emailElement);
  const checkPassword =
    InputHandler.isMatchRegEx(passwordElement, PASSWORD_REGEX) &&
    InputHandler.isMatchElement(passwordElement, passwordCheckElement);
  if (checkEmail && checkPassword) return signUpAction();
};

emailElement?.addEventListener('focusout', () => checkEmail(emailElement, emailErrorElement));
emailElement?.addEventListener('focusout', () => checkExistEmail(emailElement, emailErrorElement));
emailElement?.addEventListener('focusin', () => deleteRedBox(emailElement));
passwordElement?.addEventListener('focusout', () => checkValidPassword(passwordElement, passwordErrorElement));
passwordElement?.addEventListener('focusin', () => deleteRedBox(passwordElement));
passwordCheckElement?.addEventListener('focusout', handlePasswordCheck);
loginForm?.addEventListener('submit', handleSignUp);
eyeImagePassword?.addEventListener('click', () => toggleImage(passwordElement, eyeImagePassword));
eyeImagePasswordCheck?.addEventListener('click', () => toggleImage(passwordCheckElement, eyeImagePasswordCheck));
