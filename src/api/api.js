const BASE_URL = 'https://bootcamp-api.codeit.kr/api/sample/';

const getSampleUserData = async () => {
  const response = await fetch(`${BASE_URL}user`);
  const data = await response.json();
  return data;
};

const getSampleFolderData = async () => {
  const response = await fetch(`${BASE_URL}folder`);
  const { folder } = await response.json();
  return folder;
};

export { getSampleUserData, getSampleFolderData };
