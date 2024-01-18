export const toDisplayBlock = (query) => {
  const element = document.querySelector(query);
  element.style.display = 'block';
};

export const toDisplayNone = (query) => {
  const element = document.querySelector(query);
  element.style.display = 'none';
};
