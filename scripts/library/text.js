export const addTextAfter = (query, text, className) => {
  const findElement = document.querySelector(className);
  if (findElement) return;
  const element = document.querySelector(query);
  const textTag = document.createElement('p');
  textTag.textContent = text;
  textTag.className = className.slice(1);
  element.after(textTag);
};

export const isEmptyInput = (query) => {
  const element = document.querySelector(query);
  return element.value === '' ? true : false;
};
