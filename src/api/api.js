const getSampleUserData = async () => {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
  const data = await response.json();

  return data;
};

const getSampleFolderData = async () => {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
  const data = await response.json();
  return data;
};

export { getSampleUserData, getSampleFolderData };
