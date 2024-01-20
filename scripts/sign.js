//@ts-check
import StyleHandler from './library/style.js';
import InputHandler from './library/input.js';
import KeyHandler from './library/keyEvent.js';
import DomHandler from './library/DOM.js';
import {
  DEFAULT_BORDER_COLOR,
  EMAIL_REGEX,
  EMAIL_MESSAGE,
  ERROR_BORDER_COLOR,
  FOCUS_BORDER_COLOR,
  SHOW_PASSWORD_ICON,
  USERS,
  PASSWORD_MESSAGE,
  loginAction
} from './config/signConfig.js';

const loginEmailQuery = '.login__input--email';
const loginPasswordQuery = '.login__input--password';
const emailErrorQuery = '.email__error';
const passwordErrorQuery = '.password__error';
const loginBtnQuery = '.login__btn';

/** @type {HTMLInputElement | null}*/
const loginEmail = document.querySelector(loginEmailQuery);
/** @type {HTMLInputElement | null}*/
const loginPassword = document.querySelector(loginPasswordQuery);
/** @type {HTMLButtonElement | null}*/
const loginBtn = document.querySelector(loginBtnQuery);
/** @type {HTMLImageElement | null}*/
const eyeImg = document.querySelector('.eye-img');

const handleEmailFocusIn = () => {
  StyleHandler.display(emailErrorQuery, 'none');
  StyleHandler.borderColor(loginEmailQuery, FOCUS_BORDER_COLOR);
};

const handleEmailFocusOut = () => {
  if (InputHandler.isMatchRegEx(loginEmailQuery, EMAIL_REGEX))
    return StyleHandler.borderColor(loginEmailQuery, DEFAULT_BORDER_COLOR);
  StyleHandler.display(emailErrorQuery, 'block');
  StyleHandler.borderColor(loginEmailQuery, ERROR_BORDER_COLOR);
  if (InputHandler.isEmptyValue(loginEmailQuery)) InputHandler.changeValue(emailErrorQuery, EMAIL_MESSAGE.empty);
  else InputHandler.changeValue(emailErrorQuery, EMAIL_MESSAGE.invalid);
};

const handlePasswordFocusIn = () => {
  StyleHandler.display(passwordErrorQuery, 'none');
  StyleHandler.borderColor(loginPasswordQuery, FOCUS_BORDER_COLOR);
};

const handlePasswordFocusOut = () => {
  if (InputHandler.isEmptyValue(loginPasswordQuery)) {
    InputHandler.changeValue(passwordErrorQuery, PASSWORD_MESSAGE.empty);
    StyleHandler.display(passwordErrorQuery, 'block');
    StyleHandler.borderColor(loginPasswordQuery, ERROR_BORDER_COLOR);
  } else StyleHandler.borderColor(loginPasswordQuery, DEFAULT_BORDER_COLOR);
};

const handleLogin = () => {
  if (InputHandler.isMatchRegEx(loginEmailQuery, EMAIL_REGEX)) {
    if (
      USERS.some(
        user =>
          InputHandler.isMatchValue(loginEmailQuery, user.id) &&
          InputHandler.isMatchValue(loginPasswordQuery, user.password)
      )
    )
      return loginAction();
  }
  InputHandler.changeValue(emailErrorQuery, EMAIL_MESSAGE.fail);
  InputHandler.changeValue(passwordErrorQuery, PASSWORD_MESSAGE.fail);
  StyleHandler.display(emailErrorQuery, 'block');
  StyleHandler.display(passwordErrorQuery, 'block');
  StyleHandler.borderColor(loginPasswordQuery, ERROR_BORDER_COLOR);
  StyleHandler.borderColor(loginEmailQuery, ERROR_BORDER_COLOR);
};

/**
 * @param {KeyboardEvent} event
 */
const handleEnter = event => {
  if (!loginBtn) return;
  KeyHandler.enter(event, () => loginBtn.click());
};

const handleImgeClick = () => {
  if (!loginPassword || !eyeImg) return;
  if (loginPassword.type === 'password') {
    loginPassword.type = 'text';
    eyeImg.src = SHOW_PASSWORD_ICON.visible.src;
    eyeImg.alt = SHOW_PASSWORD_ICON.visible.alt;
  } else {
    loginPassword.type = 'password';
    eyeImg.src = SHOW_PASSWORD_ICON.invisible.src;
    eyeImg.alt = SHOW_PASSWORD_ICON.invisible.alt;
  }
};

DomHandler.addTextAfter(loginEmailQuery, emailErrorQuery, '');
StyleHandler.display(emailErrorQuery, 'none');
DomHandler.addTextAfter('.login__div--password', passwordErrorQuery, '');
StyleHandler.display(passwordErrorQuery, 'none');
loginEmail?.addEventListener('focusout', handleEmailFocusOut);
loginEmail?.addEventListener('focusin', handleEmailFocusIn);
loginEmail?.addEventListener('keydown', handleEnter);
loginPassword?.addEventListener('focusout', handlePasswordFocusOut);
loginPassword?.addEventListener('focusin', handlePasswordFocusIn);
loginPassword?.addEventListener('keydown', handleEnter);
eyeImg?.addEventListener('click', handleImgeClick);
loginBtn?.addEventListener('click', handleLogin);
