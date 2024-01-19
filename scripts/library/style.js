/**
 * @typedef {'block' | 'inline' | 'inline-block' | 'flex' | 'grid' | 'none'} DisplayTypes
 */

import { getElement } from './document.js';

/**
 * cssStyle: display변경
 * @param {string} query - css selector
 * @param {DisplayTypes} displayType - 변경할 displayType
 */
export const changeDisplay = (query, displayType) => {
  const element = getElement(query);
  if (element) element.style.display = displayType;
};

/**
 * cssStyle: Border Color 변경
 * @param {string} query - cssSelector
 * @param {color} color - 변경할 color
 * */
export const changeBorderColor = (query, color) => {
  const element = getElement(query);
  if (element) element.style.borderColor = color;
};
