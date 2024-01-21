//@ts-check
/**
 * @typedef {'block' | 'inline' | 'inline-block' | 'flex' | 'grid' | 'none'} DisplayTypes
 */

export default class StyleHandler {
  /**
   * Style: display변경
   * @param {string} query - css selector
   * @param {DisplayTypes} displayType - 변경할 displayType
   */
  static display = (query, displayType) => {
    /** @type {HTMLElement | null} element*/
    const element = document.querySelector(query);
    if (!element) return
    element.style.display = displayType;
  };

  /**
   * Style: Border Color 변경
   * @param {string} query - cssSelector
   * @param {string} color - 변경할 color
   * */
  static borderColor = (query, color) => {
    /** @type {HTMLElement | null} element*/
    const element = document.querySelector(query);
    if (!element) return
    element.style.borderColor = color;
  };
}
