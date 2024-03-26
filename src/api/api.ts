export const profileDataFetch = async (userId: number) => {
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

export const folderListDataFetch = async (userId: number) => {
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

export const selectedFolderDataFetch = async (
  userId: number,
  folderData: { id: number }
) => {
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
