const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

export const profileDataFetch = async () => {
  try {
    const response = await fetch(`${BASE_URL}users/1`);
    const { data } = await response.json();
    const profileData = data[0];
    return profileData;
  } catch (error) {
    console.log(error);
  }
};

export const folderListDataFetch = async () => {
  try {
    const response = await fetch(`${BASE_URL}users/1/folders`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const selectedFolderDataFetch = async (folderData) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};
