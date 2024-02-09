const getUserInfo = async () => {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/sample/user'
  );
  return response.json();
};

const getFolderInfo = async () => {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/sample/folder'
  );
  return response.json();
};

export { getUserInfo, getFolderInfo };
