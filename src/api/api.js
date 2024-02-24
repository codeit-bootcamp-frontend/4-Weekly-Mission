export const profileDataFetch = async (userId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}users/${userId}`
    );
    const { data } = await response.json();
    const profileData = data[0];
    return profileData;
  } catch (error) {
    console.log(error);
  }
};

export const folderListDataFetch = async (userId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}users/${userId}/folders`
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const selectedFolderDataFetch = async (userId, folderData) => {
  try {
    let response;
    if (folderData.id) {
      response = await fetch(
        `${process.env.REACT_APP_BASE_URL}users/${userId}/links?folderId=${folderData.id}`
      );
    } else {
      response = await fetch(
        `${process.env.REACT_APP_BASE_URL}users/${userId}/links`
      );
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
