export const saveTokenInLocalStorage = (keyToken, token) => {
  localStorage.setItem(keyToken, token);
}

export const getTokenInLocalStorage = (keyToken) => {
  localStorage.getItem(keyToken);
}