//@ts-check
/**
 * @typedef {object} user
 * @property {string} id
 * @property {string} password
 */
import { DOMHandler, InputHandler } from './element.js';
import {
  EMAIL_REGEX,
  EMAIL_MESSAGE,
  SHOW_PASSWORD_ICON,
  PASSWORD_MESSAGE,
  PASSWORD_REGEX,
  USERS
} from '../constant/signConfig.js';

export class SignHandler {
  /**
   * @param inputElement {HTMLInputElement} inputElement - inputElement
   * @param textElement {HTMLElement} textElement - textElement
   * @param text {string} text - textElement text
   */
  static showErrorMessage = (inputElement, textElement, text) => {
    inputElement?.classList.add('red-box');
    textElement?.classList.remove('hidden');
    DOMHandler.changeValue(textElement, text);
  };
  /** @param {HTMLElement} element*/
  static deleteRedBox = element => {
    element?.classList.remove('red-box');
  };
  /**
   * @param {HTMLInputElement} emailElement
   * @param {HTMLElement} emailErrorElement
   */
  static checkEmail = (emailElement, emailErrorElement) => {
    if (InputHandler.isMatchRegEx(emailElement, EMAIL_REGEX)) {
      emailErrorElement?.classList.add('hidden');
      return;
    }
    if (InputHandler.isEmptyValue(emailElement)) {
      this.showErrorMessage(emailElement, emailErrorElement, EMAIL_MESSAGE.empty);
      return;
    }
    this.showErrorMessage(emailElement, emailErrorElement, EMAIL_MESSAGE.invalid);
  };
  /**
   * @param {HTMLInputElement} emailElement
   * @param {HTMLElement} emailErrorElement
   */
  static checkExistEmail = (emailElement, emailErrorElement) => {
    if (this.isExistEmail(USERS, emailElement)) {
      this.showErrorMessage(emailElement, emailErrorElement, EMAIL_MESSAGE.exist);
      return;
    }
  };
  /**
   * @param {HTMLInputElement} passwordElement
   * @param {HTMLElement} passwordErrorElement
   */
  static checkValidPassword = (passwordElement, passwordErrorElement) => {
    if (InputHandler.isMatchRegEx(passwordElement, PASSWORD_REGEX)) {
      passwordErrorElement?.classList.add('hidden');
      return;
    }
    this.showErrorMessage(passwordElement, passwordErrorElement, PASSWORD_MESSAGE.invalid);
  };
  /**
   * @param {HTMLInputElement} passwordElement
   * @param {HTMLElement} passwordErrorElement
   */
  static checkEmptyPassword = (passwordElement, passwordErrorElement) => {
    if (InputHandler.isEmptyValue(passwordElement)) {
      this.showErrorMessage(passwordElement, passwordErrorElement, PASSWORD_MESSAGE.empty);
      return;
    }
    passwordErrorElement?.classList.add('hidden');
  };
  /**
   * @param {HTMLInputElement} passwordElement
   * @param {HTMLImageElement} eyeImage
   */
  static toggleImage = (passwordElement, eyeImage) => {
    if (!passwordElement || !eyeImage) return;
    if (passwordElement.type === 'password') {
      passwordElement.type = 'text';
      eyeImage.src = SHOW_PASSWORD_ICON.visible.src;
      eyeImage.alt = SHOW_PASSWORD_ICON.visible.alt;
    } else {
      passwordElement.type = 'password';
      eyeImage.src = SHOW_PASSWORD_ICON.invisible.src;
      eyeImage.alt = SHOW_PASSWORD_ICON.invisible.alt;
    }
  };
  /**
   * @param {user[]} USERS
   * @param {HTMLInputElement} emailElement
   * @param {HTMLInputElement} passwordElement
   * */
  static isValidUser = (USERS, emailElement, passwordElement) => {
    return USERS.some(
      user =>
        InputHandler.isMatchValue(emailElement, user.id) && InputHandler.isMatchValue(passwordElement, user.password)
    );
  };
  /**
   * @param {user[]} USERS
   * @param {HTMLInputElement} emailElement
   * */
  static isExistEmail = (USERS, emailElement) => {
    return USERS.some(user => InputHandler.isMatchValue(emailElement, user.id));
  };
}
