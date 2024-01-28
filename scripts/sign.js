//@ts-check
import { InputHandler, DOMHandler } from './library/utils.js';
import {
  EMAIL_REGEX,
  EMAIL_MESSAGE,
  SHOW_PASSWORD_ICON,
  USERS,
  PASSWORD_MESSAGE,
  loginAction
} from './constant/signConfig.js';

const emailElementId = 'login-email';
const passwordElementId = 'login-password';
const emailErrorId = 'email-error';
const passwordErrorId = 'password-error';
const loginBtnId = 'login-btn';

/** @type {HTMLInputElement | null} emailInput*/
const emailElement = DOMHandler.getById(emailElementId);
/** @type {HTMLInputElement} passwordElement*/
const passwordElement = DOMHandler.getById(passwordElementId);
/** @type {HTMLButtonElement} loginBtn*/
const loginBtn = DOMHandler.getById(loginBtnId);
/** @type {HTMLImageElement} eyeImg*/
const eyeImg = DOMHandler.getById('eye-img');
DOMHandler.addPAfterElement(emailElement, emailErrorId, 'error-text');
DOMHandler.addPAfterElement(passwordElement, passwordErrorId, 'error-text');
/** @type {HTMLElement} emailError*/
const emailError = DOMHandler.getById(emailErrorId);
/** @type {HTMLElement} passwordError*/
const passwordError = DOMHandler.getById(passwordErrorId);
/**
 * inputElement: ErrorColor, textElement: showErrorMessage
 * @param inputElement {HTMLInputElement | null} inputElement - inputElement
 * @param textElement {HTMLElement | null} textElement - textElement
 * @param text {string} text - textElement text
 */
const showErrorMessage = (inputElement, textElement, text) => {
  inputElement?.classList.add('red-box');
  textElement?.classList.remove('hidden');
  DOMHandler.changeValue(textElement, text);
};

const handleEmailFocusIn = () => {
  emailElement?.classList.remove('red-box');
};

const handlePasswordFocusIn = () => {
  passwordElement?.classList.remove('red-box');
};

const handleEmailFocusOut = () => {
  if (InputHandler.isMatchRegEx(emailElement, EMAIL_REGEX)) {
    emailError?.classList.add('hidden');
    return;
  }
  if (InputHandler.isEmptyValue(emailElement)) {
    showErrorMessage(emailElement, emailError, EMAIL_MESSAGE.empty);
    return;
  }
  showErrorMessage(emailElement, emailError, EMAIL_MESSAGE.invalid);
};

const handlePasswordFocusOut = () => {
  if (InputHandler.isEmptyValue(passwordElement)) {
    showErrorMessage(passwordElement, passwordError, PASSWORD_MESSAGE.empty);
    return;
  }
  passwordError?.classList.add('hidden');
};

const isUserSignedUp = (USERS, emailElement, passwordElement) => {
  return USERS.some(
    user =>
      InputHandler.isMatchValue(emailElement, user.id) && InputHandler.isMatchValue(passwordElement, user.password)
  );
};

/**
 * @param {Event} event*/
const handleLogin = event => {
  event?.preventDefault();
  emailElement?.blur();
  passwordElement?.blur();

  const isUser = isUserSignedUp(USERS, emailElement, passwordElement);
  if (isUser) {
    loginAction();
    return;
  }
  showErrorMessage(emailElement, emailError, EMAIL_MESSAGE.fail);
  showErrorMessage(passwordElement, passwordError, PASSWORD_MESSAGE.fail);
};

const handleImgeClick = () => {
  if (!passwordElement || !eyeImg) return;
  if (passwordElement.type === 'password') {
    passwordElement.type = 'text';
    eyeImg.src = SHOW_PASSWORD_ICON.visible.src;
    eyeImg.alt = SHOW_PASSWORD_ICON.visible.alt;
  } else {
    passwordElement.type = 'password';
    eyeImg.src = SHOW_PASSWORD_ICON.invisible.src;
    eyeImg.alt = SHOW_PASSWORD_ICON.invisible.alt;
  }
};

emailElement?.addEventListener('focusout', handleEmailFocusOut);
emailElement?.addEventListener('focusin', handleEmailFocusIn);
passwordElement?.addEventListener('focusout', handlePasswordFocusOut);
passwordElement?.addEventListener('focusin', handlePasswordFocusIn);
eyeImg?.addEventListener('click', handleImgeClick);
loginBtn?.addEventListener('click', handleLogin);
