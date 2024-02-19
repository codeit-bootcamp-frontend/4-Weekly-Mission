const BASE_URL = 'https://bootcamp-api.codeit.kr/api/';

const getSampleUserData = async () => {
  const response = await fetch(`${BASE_URL}sample/user`);
  const data = await response.json();
  return data;
};

const getSampleFolderData = async () => {
  const response = await fetch(`${BASE_URL}sample/folder`);
  const { folder } = await response.json();
  return folder;
};

const getTargetUserData = async userId => {
  const response = await fetch(`${BASE_URL}users/${userId}`);
  const { data } = await response.json();
  return data[0];
};

const getTargetUserFolderListData = async userId => {
  const response = await fetch(`${BASE_URL}users/${userId}/folders`);
  const { data } = await response.json();
  return data;
};

const getTargetUserFolderLinkListData = async (userId, folderId) => {
  let response;
  if (folderId !== 'all') {
    response = await fetch(`${BASE_URL}users/${userId}/links?folderId=${folderId}`);
  } else {
    response = await fetch(`${BASE_URL}users/${userId}/links`);
  }
  const { data } = await response.json();
  return data;
};
export {
  getSampleUserData,
  getSampleFolderData,
  getTargetUserData,
  getTargetUserFolderListData,
  getTargetUserFolderLinkListData,
};
