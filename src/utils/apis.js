const LOGINUSERINFOAPI = 'https://bootcamp-api.codeit.kr/api/sample/user';
const FOLDERAPI = 'https://bootcamp-api.codeit.kr/api/sample/folder';

export const getLoginUserInfo = async () => {
  return getApi(LOGINUSERINFOAPI);
};

export const getFolder = async () => {
  return getApi(FOLDERAPI);
};

const getApi = async (APIURL) => {
  const respons = await fetch(APIURL);
  const body = await respons.json();
  return body;
};
