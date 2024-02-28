// https://bootcamp-api.codeit.kr/api/sample/user

const baseUrl = 'https://bootcamp-api.codeit.kr/api';

export const getProfileData = async () => {
  const res = await fetch(`${baseUrl}/sample/user`).then((res) => res.json());

  return res;
};

// https://bootcamp-api.codeit.kr/api/sample/folder

export const getFolderData = async () => {
  const res = await fetch(`${baseUrl}/sample/folder`).then((res) => res.json());

  return res;
};

//https://bootcamp-api.codeit.kr/api/users/1/folders

export const getFolderNameData = async () => {
  const res = await fetch(`${baseUrl}/users/1/folders`).then((res) =>
    res.json()
  );

  return res;
};
