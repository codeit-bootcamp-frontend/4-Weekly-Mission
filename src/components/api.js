const getUserInfo = async () => {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/sample/user'
  );
  const result = await response.json();
  console.log(result);
};

const getFolderInfo = async () => {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/sample/folder'
  );
  const result = await response.json();
  console.log(result);
};

export { getUserInfo, getFolderInfo };
