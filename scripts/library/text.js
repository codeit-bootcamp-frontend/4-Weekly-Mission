//@ts-check
import { getElement } from './document.js';

/**
 * html: <p>태그 추가
 * @param {string} query - cssSelector
 * @param {string} className - 생성된 태그 class
 * @param {string} text - 추가할 text
 */
export const addTextAfter = (query, className, text) => {
  const findElement = getElement(className);
  if (findElement) return;
  const element = getElement(query);
  const textTag = document.createElement('p');
  textTag.textContent = text;
  textTag.className = className.slice(1);
  element.after(textTag);
};

/**
 * html: 텍스트 내용 변경
 * @param {string} query -  cssSelector
 * @param {string} text - 변경할 text
 */
export const changeText = (query, text) => {
  const element = getElement(query);
  element.innerText = text;
};

/**
 * html: 요소의 값이 비었는지 확인
 * @param {string} query - cssSelector
 * */
export const isEmptyInput = query => {
  const value = getElement(query).value;
  return value?.trim() === '' ? true : false;
};

/**
 * 정규표현식 유효값 확인
 * @param {string} query - cssSelector
 * @param {RegExp} regEx - 검사할 정규표현식
 */
export const isValidate = (query, regEx) => {
  const value = getElement(query).value;
  return regEx.test(value);
};

/**
 * html: value 일치 확인
 * @param {string} query - cssSelector
 * @param {string} value - 검사할value
 */
export const isMatchValue = (query, value) => {
  const elementValue = getElement(query).value;
  return elementValue === value;
};
