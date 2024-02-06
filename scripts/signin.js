//@ts-check
import { DOMHandler, InputHandler } from './utils/element.js';
import {
  EMAIL_MESSAGE,
  PASSWORD_MESSAGE,
  INPUT_IDS,
  EMAIL_REGEX,
  LOGIN_PATH,
  LOCALSTORAGE_ACCESSTOKEN
} from './constant/signConfig.js';
import { SignHandler } from './utils/sign.js';

const {
  emailElementId,
  passwordElementId,
  emailErrorElementId,
  passwordErrorElementId,
  loginFormId,
  passwordEyeImageId
} = INPUT_IDS;

SignHandler.checkAccessToken(LOGIN_PATH);

/** @type {HTMLInputElement} emailInput*/
const emailElement = DOMHandler.getById(emailElementId);

/** @type {HTMLInputElement} passwordElement*/
const passwordElement = DOMHandler.getById(passwordElementId);

/** @type {HTMLButtonElement} loginForm*/
const loginForm = DOMHandler.getById(loginFormId);

/** @type {HTMLImageElement} eyeImagePassword*/
const passwordEyeImageElement = DOMHandler.getById(passwordEyeImageId);

DOMHandler.addPAfterElement(emailElement, emailErrorElementId, 'error-text');
DOMHandler.addPAfterElement(passwordElement, passwordErrorElementId, 'error-text');

/** @type {HTMLElement} emailErrorElement*/
const emailErrorElement = DOMHandler.getById(emailErrorElementId);

/** @type {HTMLElement} passwordErrorElement*/
const passwordErrorElement = DOMHandler.getById(passwordErrorElementId);

const handleEmailElementFocusOut = () => {
  emailElement.classList.remove('red-box');
  if (InputHandler.isMatchRegEx(emailElement, EMAIL_REGEX)) {
    emailErrorElement?.classList.add('hidden');
    return;
  }
  emailElement.classList.add('red-box');
  InputHandler.isEmptyValue(emailElement)
    ? SignHandler.showErrorMessage(emailErrorElement, EMAIL_MESSAGE.empty)
    : SignHandler.showErrorMessage(emailErrorElement, EMAIL_MESSAGE.invalid);
};

const handlePasswordElementFocusOut = () => {
  if (InputHandler.isEmptyValue(passwordElement)) {
    SignHandler.showErrorMessage(passwordErrorElement, PASSWORD_MESSAGE.empty);
    passwordElement.classList.add('red-box');
    return;
  }
  passwordErrorElement?.classList.add('hidden');
  passwordElement.classList.remove('red-box');
};

const handlepasswordEyeImageClick = () => {
  SignHandler.toggleImage(passwordElement, passwordEyeImageElement);
};

/** @param {Event} event*/
const handleSubmit = event => {
  event.preventDefault();
  emailElement.blur();
  passwordElement.blur();

  fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: emailElement.value, password: passwordElement.value })
  })
    .then(response => response.json())
    .then(data => {
      if (data.error) throw new Error('등록되지 않은 계정');
      const accessToken = data.data.accessToken;
      localStorage.setItem(LOCALSTORAGE_ACCESSTOKEN, accessToken);
      SignHandler.navigateTo(LOGIN_PATH);
    })
    .catch(error => {
      SignHandler.showErrorMessage(emailErrorElement, EMAIL_MESSAGE.fail);
      emailElement.classList.add('red-box');
      SignHandler.showErrorMessage(passwordErrorElement, PASSWORD_MESSAGE.fail);
      passwordElement.classList.add('red-box');
      console.error(error);
    });
};

emailElement?.addEventListener('focusout', handleEmailElementFocusOut);
passwordElement?.addEventListener('focusout', handlePasswordElementFocusOut);
passwordEyeImageElement?.addEventListener('click', handlepasswordEyeImageClick);
loginForm?.addEventListener('submit', handleSubmit);
