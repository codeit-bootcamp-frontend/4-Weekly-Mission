const LOGIN_USER_INFO_API = (userId) =>
  `https://bootcamp-api.codeit.kr/api/users/${userId}`;
const FOLDER_API = 'https://bootcamp-api.codeit.kr/api/sample/folder';
const LINK_API = (userId, folderId) =>
  `https://bootcamp-api.codeit.kr/api/users/${userId}/links${
    folderId && '?folderId=' + folderId
  }`;
const USER_FOLDER_API = (userId) =>
  `https://bootcamp-api.codeit.kr/api/users/${userId}/folders`;

export const getLoginUserInfo = async (userId) => {
  return getApi(LOGIN_USER_INFO_API(userId));
};

export const getFolder = async () => {
  return getApi(FOLDER_API);
};

export const getLinks = async (userId, folderId) => {
  folderId = folderId === 'all' ? '' : folderId;
  return getApi(LINK_API(userId, folderId));
};

export const getFolders = async (userId) => {
  return getApi(USER_FOLDER_API(userId));
};

const getApi = async (APIURL) => {
  const respons = await fetch(APIURL);
  const body = await respons.json();
  return body;
};
