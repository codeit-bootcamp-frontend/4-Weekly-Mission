const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

export const profileDataFetch = async () => {
  const response = await fetch(`${BASE_URL}users/1`);
  const { data } = await response.json();
  return data[0];
};

export const folderListDataFetch = async () => {
  const response = await fetch(`${BASE_URL}users/1/folders`);
  const { data } = await response.json();
  return data;
};

export const selectedFolderDataFetch = async (folderData) => {
  let response;
  if (folderData.id) {
    response = await fetch(
      `${BASE_URL}users/1/links?folderId=${folderData.id}`
    );
  } else {
    response = await fetch(`${BASE_URL}users/1/links`);
  }
  const { data } = await response.json();
  return data;
};
