export const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

export const getSampleUser = async () => {
  const response = await fetch(`${BASE_URL}/sample/user`);
  const data = await response.json();
  return data;
};

export const getSampleFolder = async () => {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  const data = await response.json();
  return data.folder;
};
export const getUser = async () => {
  const response = await fetch(`${BASE_URL}/users/1`);
  const data = await response.json();
  return data.data;
};

export const getUserFolder = async () => {
  const response = await fetch(`${BASE_URL}/users/1/folders`);
  const data = await response.json();
  return data.data;
};

export const getUserLink = async () => {
  const response = await fetch(`${BASE_URL}/users/1/links`);
  const data = await response.json();
  return data.data;
};

export const getFolderId = async (folderId) => {
  const response = await fetch(`${BASE_URL}/users/1/links?folderId=${folderId}`);
  const data = await response.json();
  return data.data;
};
