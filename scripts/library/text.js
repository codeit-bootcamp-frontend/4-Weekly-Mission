/**
 * 요소 뒤에 <p>태그 추가
 * @param {string} query - 요소의 css selector
 * @param {string} text - 추가할 text
 * @param {string} className - 추가된 요소의 class명
 */
export const addTextAfter = (query, text, className) => {
  const findElement = document.querySelector(className);
  if (findElement) return;
  const element = document.querySelector(query);
  const textTag = document.createElement('p');
  textTag.textContent = text;
  textTag.className = className.slice(1);
  element.after(textTag);
};

/**
 * 요소의 값이 비었는지 확인
 * @param {string} query - 요소의 css selector*/
export const isEmptyInput = (query) => {
  const element = document.querySelector(query);
  return element.value === '' ? true : false;
};

export const isValidate = (regEx, text) => {
  return regEx.test(text);
};
