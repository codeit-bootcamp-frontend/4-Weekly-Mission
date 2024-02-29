const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

export const getSamepleUserInfo = async () => {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  const result = response.json();
  return result;
};

export const getUserInfo = async () => {
  const response = await fetch(`${BASE_URL}/users/1`);
  const result = response.json();
  return result;
};

export const getFolderInfo = async () => {
  const response = await fetch(`${BASE_URL}/users/1/folders`);
  const result = response.json();
  return result;
};

export const getLinksInfo = async () => {
  const response = await fetch(`${BASE_URL}/users/1/links`);
  const result = response.json();
  return result;
};

export const getSelectLinksInfo = async (folderId) => {
  const response = await fetch(
    `${BASE_URL}/users/1/links?folderId=${folderId}`
  );
  const result = response.json();
  return result;
};
