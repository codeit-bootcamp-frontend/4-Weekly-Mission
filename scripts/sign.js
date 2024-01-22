//@ts-check
import InputHandler from './library/input.js'; import KeyHandler from './library/keyEvent.js';
import DOMHandler from './library/DOM.js';
import {
  EMAIL_REGEX,
  EMAIL_MESSAGE,
  SHOW_PASSWORD_ICON,
  USERS,
  PASSWORD_MESSAGE,
  loginAction
} from './constant/signConfig.js';

const emailInputId = 'login__input--email';
const passwordInputId = 'login__input--password';
const emailErrorId = 'email__error';
const passwordErrorId = 'password__error';
const loginBtnId = 'login__btn';

/** @type {HTMLInputElement | null} emailInput*/
const emailInput = DOMHandler.getById(emailInputId);
/** @type {HTMLInputElement} passwordInput*/
const passwordInput = DOMHandler.getById(passwordInputId);
/** @type {HTMLButtonElement} loginBtn*/
const loginBtn = DOMHandler.getById(loginBtnId);
/** @type {HTMLImageElement} eyeImg*/
const eyeImg = DOMHandler.getById('eye-img');
DOMHandler.addTextAfter(emailInput, emailErrorId, '');
DOMHandler.addTextAfter(passwordInput, passwordErrorId, '');
/** @type {HTMLElement} emailError*/
const emailError = DOMHandler.getById(emailErrorId)
/** @type {HTMLElement} passwordError*/
const passwordError = DOMHandler.getById(passwordErrorId)
/**
 * inputElement: ErrorColor, textElement: showErrorMessage
 * @param inputElement {HTMLInputElement | null} inputElement - inputElement
 * @param textElement {HTMLElement | null} textElement - textElement
 * @param text {string} text - textElement text
*/
const showErrorMessage = (inputElement, textElement, text) => {
  inputElement?.classList.add('input--error')
  textElement?.classList.remove('hidden')
  DOMHandler.changeValue(textElement, text)
}

const handleEmailFocusIn = () => {
  emailInput?.classList.remove('input--error')
}

const handlePasswordFocusIn = () => {
  passwordInput?.classList.remove('input--error')
}

const handleEmailFocusOut = () => {
  if (InputHandler.isMatchRegEx(emailInput, EMAIL_REGEX)) {
    emailError?.classList.add('hidden')
    return
  }
  if (InputHandler.isEmptyValue(emailInput)) {
    showErrorMessage(emailInput, emailError, EMAIL_MESSAGE.empty)
    return;
  }
  showErrorMessage(emailInput, emailError, EMAIL_MESSAGE.invalid)
};

const handlePasswordFocusOut = () => {
  if (InputHandler.isEmptyValue(passwordInput)) {
    showErrorMessage(passwordInput, passwordError, PASSWORD_MESSAGE.empty)
    return
  };
  passwordError?.classList.add('hidden')
}

const handleLogin = () => {
  emailInput?.blur()
  passwordInput?.blur()

  const isUserSignedUp = USERS.some(
    user =>
      InputHandler.isMatchValue(emailInput, user.id) &&
      InputHandler.isMatchValue(passwordInput, user.password)
  );

  if (isUserSignedUp) {
    loginAction();
    return;
  }
  showErrorMessage(emailInput, emailError, EMAIL_MESSAGE.fail)
  showErrorMessage(passwordInput, passwordError, PASSWORD_MESSAGE.fail)
};

const handleEnter = () => {
  if (!loginBtn) return;
  KeyHandler.enter(() => {
    loginBtn?.click()

  });
};

const handleImgeClick = () => {
  if (!passwordInput || !eyeImg) return;
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeImg.src = SHOW_PASSWORD_ICON.visible.src;
    eyeImg.alt = SHOW_PASSWORD_ICON.visible.alt;
  } else {
    passwordInput.type = 'password';
    eyeImg.src = SHOW_PASSWORD_ICON.invisible.src;
    eyeImg.alt = SHOW_PASSWORD_ICON.invisible.alt;
  }
};

emailInput?.addEventListener('focusout', handleEmailFocusOut);
emailInput?.addEventListener('focusin', handleEmailFocusIn);
emailInput?.addEventListener('keydown', handleEnter);
passwordInput?.addEventListener('focusout', handlePasswordFocusOut);
passwordInput?.addEventListener('focusin', handlePasswordFocusIn);
passwordInput?.addEventListener('keydown', handleEnter);
eyeImg?.addEventListener('click', handleImgeClick);
loginBtn?.addEventListener('click', handleLogin);
