export const storeTokenInLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getTokenFromLocalStorage = (token) => {
  return localStorage.getItem(token);
};
