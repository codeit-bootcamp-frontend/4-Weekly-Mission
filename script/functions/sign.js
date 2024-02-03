import {EMAIL_REGEX, PASSWORD_REGEX, VISIABLE_STATE} from '../constant.js'
import { addClass, makeInvisiable, makeVisiable, removeClass } from '../dom/domhelper.js';

//빈 문자열인지 체크
export function isEmptyString(value) {
  return typeof value === 'string' && value.trim() === '';
}
//이메일의 유효성 검사
export function isValidEmail(email) { 
  return EMAIL_REGEX.test(email);
}

//비밀번호의 유효성 검사
export function isValidPassword(password) { 
  return PASSWORD_REGEX.test(password);
}

export function isValidEmailFormat(emailValue) {
  return !isEmptyString(emailValue) && isValidEmail(emailValue) && emailValue !== 'test@codeit.com'; 
}

export function isValidPasswordFormat (passwordValue) {
  return !isEmptyString(passwordValue) && isValidPassword(passwordValue);
}

export function isValidPasswordConfirmFormat (passwordConfirmValue) {
  return passwordValue === passwordConfirmValue;
}

/**
  *@param {*} inputElement 오류가 발생한 input
  *@param {*} errorTextElement 오류 메세지를 표시할 div
  *@param {string} message 오류 내용
*/
export const showError = (inputElement, errorTextElement , message) => {
  addClass(inputElement, 'error-box');
  makeVisiable(errorTextElement);
  errorTextElement.textContent = message;
}

/**
  *@param {*} inputElement 오류가 발생한 input
  *@param {*} errorTextElement 오류 메세지를 표시할 div
*/
export const hideError = (inputElement, errorTextElement) => {
  removeClass(inputElement, 'error-box');
  makeInvisiable(errorTextElement);
}

/**
 * @param {*} inputElement button 이 있는 input 
 * @param {*} buttonElement input안의 button element
 */
export const showPassword = (inputElement, buttonElement) => {
  buttonElement.firstElementChild.src = VISIABLE_STATE.invisiable;
  inputElement.type = 'password';
}

/**
 * @param {*} inputElement button 이 있는 input 
 * @param {*} buttonElement input안의 button element
 */
export const hidePassword = (inputElement, buttonElement) => {
  buttonElement.firstElementChild.src = VISIABLE_STATE.visiable;
  inputElement.type = 'text';
}

