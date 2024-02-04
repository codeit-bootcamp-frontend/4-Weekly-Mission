const redirect = (url) => {
  if (!url) return;
  window.location.href = url;
};

const getLocalStorage = (key) => {
  return localStorage.getItem(key) || null;
};

const setLocalStorage = (key, value) => {
  if (!key || !value) return;
  localStorage.setItem();
};

const removeLocalstorage = (key) => {
  localStorage.getItem(key) && localStorage.removeItem(key);
};

export { redirect, getLocalStorage, setLocalStorage, removeLocalstorage };
