//@ts-check
/**
 * @typedef {object} user
 * @property {string} id
 * @property {string} password
 */
import { DOMHandler, InputHandler } from './element.js';
import { SHOW_PASSWORD_ICON, USERS } from '../constant/signConfig.js';

export class SignHandler {
  /**
   * @param inputElement {HTMLInputElement} inputElement - inputElement
   * @param textElement {HTMLElement} textElement - textElement
   * @param text {string} text - textElement text
   */
  static showErrorMessage = (textElement, text) => {
    textElement?.classList.remove('hidden');
    DOMHandler.changeValue(textElement, text);
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
   * @param {HTMLInputElement} emailElement
   * @param {HTMLInputElement} passwordElement
   * */
  static isValidUser = (emailElement, passwordElement) => {
    return USERS.some(
      user =>
        InputHandler.isMatchValue(emailElement, user.id) && InputHandler.isMatchValue(passwordElement, user.password)
    );
  };

  /**
   * @param {HTMLInputElement} emailElement
   * */
  static isExistEmail = emailElement => {
    return USERS.some(user => InputHandler.isMatchValue(emailElement, user.id));
  };

  static navigateTo = path => {
    window.location.href = path;
  };
}
