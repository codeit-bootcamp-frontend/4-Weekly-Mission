import {EMAIL_REGEX, PASSWORD_REGEX} from '../constant.js'
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
export function isValidPassword(email) { 
  return PASSWORD_REGEX.test(email);
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