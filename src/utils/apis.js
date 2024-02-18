const LOGIN_USER_INFO_API = 'https://bootcamp-api.codeit.kr/api/sample/user';
const FOLDER_API = 'https://bootcamp-api.codeit.kr/api/sample/folder';
const LINK_API = 'https://bootcamp-api.codeit.kr/api/users/';
const USER_FOLDER_API = (userId) =>
  `https://bootcamp-api.codeit.kr/api/users/${userId}/folders`;

export const getLoginUserInfo = async () => {
  return getApi(LOGIN_USER_INFO_API);
};

export const getFolder = async () => {
  return getApi(FOLDER_API);
};

export const getLinks = async (userId) => {
  return getApi(`${LINK_API + userId}`);
};

export const getFolders = async (userId) => {
  return getApi(USER_FOLDER_API(userId));
};

const getApi = async (APIURL) => {
  const respons = await fetch(APIURL);
  const body = await respons.json();
  return body;
};
