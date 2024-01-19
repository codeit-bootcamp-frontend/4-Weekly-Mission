//@ts-check
import { getElement } from "./document.js";

/**
 * 요소 뒤에 <p>태그 추가
 * @param {string} query - 요소의 css selector
 * @param {string} className - 추가된 요소의 class명
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
 * 텍스트 내용 변경
 * @param {string} query - 요소의 css selector
 * @param {string} text - 변경할 text
  */
export const changeText = (query, text) => {
  const element = getElement(query)
  element.innerText = text
}

/**
 * 요소의 값이 비었는지 확인
 * @param {string} query - 요소의 css selector
 * */
export const isEmptyInput = (query) => {
  const value = getElement(query).value;
  return value?.trim() === '' ? true : false;
};

/**
 * 정규표현식의 유효한 값인지 확인
 * @param {string} query - 요소의 css selector
 * @param {RegExp} regEx - 검사할 정규표현식
 * */
export const isValidate = (query, regEx) => {
  const value = getElement(query).value
  return regEx.test(value)
};

export const isMatchText = (query, text) => {
  const value = getElement(query).value
  return value === text
}
