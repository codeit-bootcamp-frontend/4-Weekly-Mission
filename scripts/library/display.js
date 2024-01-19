/**
 * @typedef {'block' | 'inline' | 'inline-block' | 'flex' | 'grid' | 'none'} DisplayTypes
 */

/**
 * 요소 스타일에 display:'block' 적용
 * @param {string} query - 요소의 css selector
 * @param {DisplayTypes} displayType - 적용할 displayType
 */
export const displayChange = (query, displayType) => {
  const element = document.querySelector(query);
  if (element) element.style.display = displayType;
};
