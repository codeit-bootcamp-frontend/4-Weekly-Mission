//@ts-check
import {
  EMAIL_REGEX,
  INPUT_IDS,
  PASSWORD_MESSAGE,
  PASSWORD_REGEX,
  USERS,
  signUpAction
} from './constant/signConfig.js';
import { DOMHandler, InputHandler } from './utils/element.js';
import { SignHandler } from './utils/sign.js';

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
/** @type {HTMLInputElement} loginButton*/
const passwordCheckElement = DOMHandler.getById(passwordCheckElementId);
/** @type {HTMLFormElement} loginForm*/
const loginForm = DOMHandler.getById(loginFormId);
/** @type {HTMLImageElement} eyeImagePassword*/
const eyeImagePassword = DOMHandler.getById(eyeImagePasswordId);
/** @type {HTMLImageElement} eyeImagePasswordCheck*/
const eyeImagePasswordCheck = DOMHandler.getById(eyeImagePasswordCheckId);
DOMHandler.addPAfterElement(emailElement, emailErrorElementId, 'error-text');
DOMHandler.addPAfterElement(passwordElement, passwordErrorElementId, 'error-text');
DOMHandler.addPAfterElement(passwordCheckElement, passwordCheckErrorElementId, 'error-text');
/** @type {HTMLElement} emailErrorElement*/
const emailErrorElement = DOMHandler.getById(emailErrorElementId);
/** @type {HTMLElement} passwordErrorElement*/
const passwordErrorElement = DOMHandler.getById(passwordErrorElementId);
/** @type {HTMLElement} passwordCheckErrorElement*/
const passwordCheckErrorElement = DOMHandler.getById(passwordCheckErrorElementId);

const handlePasswordMatch = () => {
  if (InputHandler.isMatchElement(passwordElement, passwordCheckElement)) {
    passwordCheckErrorElement.classList.add('hidden');
    return;
  }
  SignHandler.showErrorMessage(passwordCheckElement, passwordCheckErrorElement, PASSWORD_MESSAGE.match);
};
/** @param {Event} event */
const handleSignUp = event => {
  event.preventDefault();
  emailElement.blur();
  passwordElement.blur();
  passwordCheckElement.blur();

  const checkEmail =
    InputHandler.isMatchRegEx(emailElement, EMAIL_REGEX) && !SignHandler.isExistEmail(USERS, emailElement);
  const checkPassword =
    InputHandler.isMatchRegEx(passwordElement, PASSWORD_REGEX) &&
    InputHandler.isMatchElement(passwordElement, passwordCheckElement);
  if (checkEmail && checkPassword) return signUpAction();
};

emailElement?.addEventListener('focusout', () => SignHandler.checkEmail(emailElement, emailErrorElement));
emailElement?.addEventListener('focusout', () => SignHandler.checkExistEmail(emailElement, emailErrorElement));
emailElement?.addEventListener('focusin', () => SignHandler.deleteRedBox(emailElement));
passwordElement?.addEventListener('focusout', () =>
  SignHandler.checkValidPassword(passwordElement, passwordErrorElement)
);
passwordElement?.addEventListener('focusin', () => SignHandler.deleteRedBox(passwordElement));
passwordCheckElement?.addEventListener('focusout', handlePasswordMatch);
passwordCheckElement?.addEventListener('focusin', () => SignHandler.deleteRedBox(passwordCheckElement));
eyeImagePassword?.addEventListener('click', () => SignHandler.toggleImage(passwordElement, eyeImagePassword));
eyeImagePasswordCheck?.addEventListener('click', () =>
  SignHandler.toggleImage(passwordCheckElement, eyeImagePasswordCheck)
);
loginForm?.addEventListener('submit', handleSignUp);
