//@ts-check
/** @typedef {HTMLElement | null} HTMLElements*/
/** @typedef { HTMLInputElement | null }  HTMLInputElements */
export class InputHandler {
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
    if (element?.tagName !== 'INPUT') return;
    return regEx.test(element.value);
  };

  /**
   * <input> 요소의 값 일치 확인
   * @param {HTMLInputElements} element - inputElement
   * @param {string} value - 확인할 값
   */
  static isMatchValue = (element, value) => {
    if (element?.tagName !== 'INPUT') return;
    return element.value === value;
  };

  static isMatchElement = (elementA, elementB) => {
    if (elementA?.tagName !== 'INPUT' || elementB?.tagName !== 'INPUT') return;
    return elementA.value === elementB.value;
  };
}

export class DOMHandler {
  /**
   * @param {HTMLElements} element - HTMLelement
   * @param {string=} id - (opt)추가할 태그 id
   * @param {string=} className - (opt) 추가할 className*/
  static addPAfterElement = (element, id, className) => {
    if (!element) return;
    const textTag = document.createElement('p');
    if (id) textTag.id = id;
    if (className) textTag.classList.add(className);
    element.after(textTag);
  };
  /**
   * html: 텍스트 내용 변경
   * @param {HTMLElements} element - HTMLElement
   * @param {string} text - 변경할 text
   */
  static changeValue = (element, text) => {
    if (!element) return;
    element.innerText = text;
  };

  /**
   * @param {string} id - css id
   * @returns {any}
   */
  static getById = id => {
    return document.querySelector(`#${id}`);
  };
}
