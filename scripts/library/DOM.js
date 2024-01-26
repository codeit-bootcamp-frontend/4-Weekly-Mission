//@ts-check
/** @typedef {HTMLElement | null} HTMLElements*/
export default class DOMHandler {
  /**
   * @param {HTMLElements} element - HTMLelement
   * @param {string} id - 추가할 태그 id
   * @param {string} text*/
  static addTextAfter = (element, id, text) => {
    if (!element) return;
    const textTag = document.createElement('p');
    textTag.textContent = text;
    textTag.id = id;
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
