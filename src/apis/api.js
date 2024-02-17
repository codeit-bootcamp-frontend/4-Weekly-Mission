const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

const getUserInfo = async () => {
  const response = await fetch(`${BASE_URL}/users/1`);
  const result = response.json();
  return result;
};

const getFolderInfo = async (userId) => {
  const response = await fetch(`${BASE_URL}/users/1/folders`);
  const result = response.json();
  return result;
};

const getLinksInfo = async (userId) => {
  const response = await fetch(`${BASE_URL}/users/1/links`);
  const result = response.json();
  return result;
};

export { getUserInfo, getFolderInfo, getLinksInfo };
