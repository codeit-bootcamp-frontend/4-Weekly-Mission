//@ts-check
import {
  INPUT_IDS,
  LOCALSTORAGE_ACCESSTOKEN,
  PASSWORD_MESSAGE,
  PASSWORD_REGEX,
  SIGNUP_PATH
} from './constant/signConfig.js';
import { DOMHandler, InputHandler } from './utils/element.js';
import { SignHandler } from './utils/sign.js';
import { useAxios } from './utils/axios.js';

// SignHandler.checkAccessToken(SIGNUP_PATH);

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

const handleEmailElementFocusOut = async () => {
  emailElement.classList.remove('red-box');
  const axios = useAxios();

  try {
    await axios.post('/api/check-email', { email: emailElement.value });
    emailErrorElement?.classList.add('hidden');
  } catch (err) {
    const error = err.response.data.error;
    SignHandler.showErrorMessage(emailErrorElement, error.message);
    emailElement.classList.add('red-box');
  }
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
  emailElement.blur();
  passwordElement.blur();
  passwordCheckElement.blur();

  const axios = useAxios();
  const checkEmail = await axios.post('/api/check-email', { email: emailElement.value });
  console.log(checkEmail);
  const checkPassword =
    InputHandler.isMatchRegEx(passwordElement, PASSWORD_REGEX) &&
    InputHandler.isMatchElement(passwordElement, passwordCheckElement);
  if (checkEmail && checkPassword) {
    try {
      const { data: response } = await axios.post('/api/sign-up', {
        email: emailElement.value,
        password: passwordElement.value
      });
      const accessToken = response.data.accessToken;
      console.log(accessToken);
      localStorage.setItem(LOCALSTORAGE_ACCESSTOKEN, accessToken);
      SignHandler.navigateTo(SIGNUP_PATH);
    } catch (err) {
      console.log(err);
    }
  }
};

emailElement?.addEventListener('focusout', handleEmailElementFocusOut);
passwordElement?.addEventListener('focusout', handlePasswordElementFocusOut);
passwordCheckElement?.addEventListener('focusout', handlePasswordCheckElementFocusOut);
passwordEyeImageElement?.addEventListener('click', handlePasswordEyeImageClick);
passwordCheckEyeImageElement?.addEventListener('click', handlePasswordCheckEyeImageClick);
loginForm?.addEventListener('submit', handleSignUp);
