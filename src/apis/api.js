export const BASE_URL = 'https://bootcamp-api.codeit.kr/api';
/**
 *
 * @param {string} url - api 주소
 * @returns json data
 */
export const get = async (url) => {
  const response = await fetch(`${BASE_URL}${url}`);
  const data = await response.json();
  return data;
};
