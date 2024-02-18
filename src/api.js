// https://bootcamp-api.codeit.kr/api/sample/user

const getProfileData = async () => {
  const res = await fetch('https://bootcamp-api.codeit.kr/api/sample/user').then(res => res.json());

  return res;
};

// https://bootcamp-api.codeit.kr/api/sample/folder

const getFolderData = async () => {
  const res = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder').then(res => res.json());

  return res;
};

export { getProfileData, getFolderData };
