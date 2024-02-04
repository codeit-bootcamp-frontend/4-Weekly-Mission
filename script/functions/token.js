/**
 * 
 * @param {*} keyToken Token의 key값 
 * @param {*} token Token의 value값
 */
export const saveTokenInLocalStorage = (keyToken, token) => {
  localStorage.setItem(keyToken, token);
}

export const getTokenInLocalStorage = (keyToken) => {
  localStorage.getItem(keyToken);
}