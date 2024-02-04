//@ts-check
import {
  EMAIL_MESSAGE,
  EMAIL_REGEX,
  INPUT_IDS,
  PASSWORD_MESSAGE,
  PASSWORD_REGEX,
  SIGNUP_PATH
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
  passwordEyeImageId,
  passwordCheckEyeImageId
} = INPUT_IDS;

SignHandler.checkAccessToken(SIGNUP_PATH);

/** @type {HTMLInputElement} emailInput*/
const emailElement = DOMHandler.getById(emailElementId);

/** @type {HTMLInputElement} passwordElement*/
const passwordElement = DOMHandler.getById(passwordElementId);

/** @type {HTMLInputElement} loginButton*/
const passwordCheckElement = DOMHandler.getById(passwordCheckElementId);

/** @type {HTMLFormElement} loginForm*/
const loginForm = DOMHandler.getById(loginFormId);

/** @type {HTMLImageElement} eyeImagePassword*/
const passwordEyeImageElement = DOMHandler.getById(passwordEyeImageId);

/** @type {HTMLImageElement} eyeImagePasswordCheck*/
const passwordCheckEyeImageElement = DOMHandler.getById(passwordCheckEyeImageId);

DOMHandler.addPAfterElement(emailElement, emailErrorElementId, 'error-text');
DOMHandler.addPAfterElement(passwordElement, passwordErrorElementId, 'error-text');
DOMHandler.addPAfterElement(passwordCheckElement, passwordCheckErrorElementId, 'error-text');

/** @type {HTMLElement} emailErrorElement*/
const emailErrorElement = DOMHandler.getById(emailErrorElementId);

/** @type {HTMLElement} passwordErrorElement*/
const passwordErrorElement = DOMHandler.getById(passwordErrorElementId);

/** @type {HTMLElement} passwordCheckErrorElement*/
const passwordCheckErrorElement = DOMHandler.getById(passwordCheckErrorElementId);

const handleEmailElementFocusOut = () => {
  emailElement.classList.remove('red-box');
  if (SignHandler.isExistEmail(emailElement)) {
    SignHandler.showErrorMessage(emailErrorElement, EMAIL_MESSAGE.exist);
    emailElement.classList.add('red-box');
    return;
  }
  if (InputHandler.isMatchRegEx(emailElement, EMAIL_REGEX)) {
    emailErrorElement?.classList.add('hidden');
    return;
  }
  emailElement.classList.add('red-box');
  if (InputHandler.isEmptyValue(emailElement)) {
    SignHandler.showErrorMessage(emailErrorElement, EMAIL_MESSAGE.empty);
    return;
  }
  SignHandler.showErrorMessage(emailErrorElement, EMAIL_MESSAGE.invalid);
};

const handlePasswordElementFocusOut = () => {
  passwordElement.classList.remove('red-box');
  if (InputHandler.isEmptyValue(passwordElement)) {
    SignHandler.showErrorMessage(passwordErrorElement, PASSWORD_MESSAGE.empty);
    passwordElement.classList.add('red-box');
    return;
  }
  if (InputHandler.isMatchRegEx(passwordElement, PASSWORD_REGEX)) {
    passwordErrorElement?.classList.add('hidden');
    return;
  }
  SignHandler.showErrorMessage(passwordErrorElement, PASSWORD_MESSAGE.invalid);
  passwordElement.classList.add('red-box');
};

const handlePasswordCheckElementFocusOut = () => {
  passwordCheckElement.classList.remove('red-box');
  if (InputHandler.isMatchElement(passwordElement, passwordCheckElement)) {
    passwordCheckErrorElement.classList.add('hidden');
    return;
  }
  SignHandler.showErrorMessage(passwordCheckErrorElement, PASSWORD_MESSAGE.match);
  passwordCheckElement.classList.add('red-box');
};

const handlePasswordEyeImageClick = () => {
  SignHandler.toggleImage(passwordElement, passwordEyeImageElement);
};

const handlePasswordCheckEyeImageClick = () => {
  SignHandler.toggleImage(passwordCheckElement, passwordCheckEyeImageElement);
};

/** @param {Event} event */
const handleSignUp = async event => {
  event.preventDefault();

  const checkEmail = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: emailElement.value })
  });

  console.log(checkEmail);
  const checkPassword =
    InputHandler.isMatchRegEx(passwordElement, PASSWORD_REGEX) &&
    InputHandler.isMatchElement(passwordElement, passwordCheckElement);

  if (checkEmail && checkPassword)
    fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: emailElement.value, password: passwordElement.value })
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) throw new Error('회원가입 실패');
        const accessToken = data.data.accessToken;
        localStorage.setItem('accessToken', accessToken);
        SignHandler.navigateTo(SIGNUP_PATH);
      });
};

emailElement?.addEventListener('focusout', handleEmailElementFocusOut);
passwordElement?.addEventListener('focusout', handlePasswordElementFocusOut);
passwordCheckElement?.addEventListener('focusout', handlePasswordCheckElementFocusOut);
passwordEyeImageElement?.addEventListener('click', handlePasswordEyeImageClick);
passwordCheckEyeImageElement?.addEventListener('click', handlePasswordCheckEyeImageClick);
loginForm?.addEventListener('submit', handleSignUp);
