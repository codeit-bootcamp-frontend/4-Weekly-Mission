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

const getUserData = async id => {
  const response = await fetch(`${BASE_URL}users/${id}`);
  const { data } = await response.json();
  return data[0];
};

export { getSampleUserData, getSampleFolderData, getUserData };
