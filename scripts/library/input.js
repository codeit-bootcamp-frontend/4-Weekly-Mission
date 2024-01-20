//@ts-check
/** @typedef {HTMLInputElement | null} HTMLInput*/
export default class InputHandler {
  /**
   * <input> 텍스트 내용 변경
   * @param {string} query -  cssSelector
   * @param {string} text - 변경할 text
   */
  static changeValue = (query, text) => {
    /** @type {HTMLInputElement | null} element*/
    const element = document.querySelector(query);
    if (element) element.innerText = text;
  };

  /** <input> 요소의 값이 비었는지 확인
   * @param {string} query - cssSelector
   * */
  static isEmptyValue = query => {
    /** @type {HTMLInput} */
    const element = document.querySelector(query);
    if (element) return element.value?.trim() === '' ? true : false;
  };

  /**
   * <input> 정규표현식 유효값 확인
   * @param {string} query - cssSelector
   * @param {RegExp} regEx - 검사할 정규표현식
   */
  static isMatchRegEx = (query, regEx) => {
    /** @type {HTMLInput} element*/
    const element = document.querySelector(query);
    if (element) return regEx.test(element.value);
  };

  /**
   * <input> 요소의 값 일치 확인
   * @param {string} query - cssSelector
   * @param {string} value - 확인할 값
   */
  static isMatchValue = (query, value) => {
    /** @type {HTMLInput} element*/
    const element = document.querySelector(query);
    if (element) return element.value === value;
  };
}
