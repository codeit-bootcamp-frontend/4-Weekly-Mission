//@ts-check
/** @typedef { HTMLInputElement | null }  HTMLInputElements */
export default class InputHandler {
  /** <input> 요소의 값이 비었는지 확인
   * @param {HTMLInputElements} element - inputElement
   * */
  static isEmptyValue = element => {
    if (!(element?.tagName === 'INPUT')) return;
    return element.value.trim() === '';
  };

  /**
   * <input> 정규표현식 유효값 확인
   * @param {HTMLInputElements} element - inputElement
   * @param {RegExp} regEx - 검사할 정규표현식
   */
  static isMatchRegEx = (element, regEx) => {
    if (!(element?.tagName === 'INPUT')) return;
    return regEx.test(element.value);
  };

  /**
   * <input> 요소의 값 일치 확인
   * @param {HTMLInputElements} element - inputElement
   * @param {string} value - 확인할 값
   */
  static isMatchValue = (element, value) => {
    if (!(element?.tagName === 'INPUT')) return;
    return element.value === value;
  };
}
