const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

const getSamepleUserInfo = async () => {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  const result = response.json();
  return result;
};

const getUserInfo = async () => {
  const response = await fetch(`${BASE_URL}/users/1`);
  const result = response.json();
  return result;
};

const getFolderInfo = async () => {
  const response = await fetch(`${BASE_URL}/users/1/folders`);
  const result = response.json();
  return result;
};

const getLinksInfo = async () => {
  const response = await fetch(`${BASE_URL}/users/1/links`);
  const result = response.json();
  return result;
};

const getSelectLinksInfo = async (folderId) => {
  const response = await fetch(
    `${BASE_URL}/users/1/links?folderId=${folderId}`
  );
  const result = response.json();
  return result;
};

export {
  getSamepleUserInfo,
  getUserInfo,
  getFolderInfo,
  getLinksInfo,
  getSelectLinksInfo,
};
