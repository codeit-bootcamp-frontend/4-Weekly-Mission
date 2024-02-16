const LOGIN_USER_INFO_API = 'https://bootcamp-api.codeit.kr/api/sample/user';
const FOLDER_API = 'https://bootcamp-api.codeit.kr/api/sample/folder';

export const getLoginUserInfo = async () => {
  return getApi(LOGIN_USER_INFO_API);
};

export const getFolder = async () => {
  return getApi(FOLDER_API);
};

const getApi = async (APIURL) => {
  const respons = await fetch(APIURL);
  const body = await respons.json();
  return body;
};
