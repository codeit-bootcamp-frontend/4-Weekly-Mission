const BASEURL = 'https://bootcamp-api.codeit.kr/api';
export const userSampleDataAPI = async () => {
  const APIData = { email: null, image: null };
  try {
    const response = await fetch(`${BASEURL}/users/1`);
    if (response.ok) {
      const { data } = await response.json();
      APIData.email = data[0].email;
      APIData.image = data[0].image_source;
      return APIData;
    }
    throw new Error('데이터 불러오기 실패');
  } catch (error) {
    /*eslint-disable-next-line */
    console.error(error);
    return null;
  }
};

export const folderDataAPI = async () => {
  const APIData = {
    userName: null,
    userImage: null,
    name: null,
    cardData: null,
  };
  try {
    const response = await fetch(`${BASEURL}/sample/folder`);
    if (response.ok) {
      const { folder } = await response.json();
      APIData.userName = folder.owner.name;
      APIData.userImage = folder.owner.profileImageSource;
      APIData.name = folder.name;
      APIData.cardData = folder.links;
      return APIData;
    }
    throw new Error('데이터 불러오기 실패');
  } catch (error) {
    /*eslint-disable-next-line */
    console.error(error);
    return null;
  }
};

export const categoryDataAPI = async () => {
  try {
    const response = await fetch(`${BASEURL}/users/1/folders`);
    if (response.ok) {
      const { data } = await response.json();
      return data;
    }
    throw new Error('데이터 불러오기 실패');
  } catch (error) {
    /*eslint-disable-next-line */
    console.error(error);
    return null;
  }
};

export const categoryFolderDataAPI = async (CategoryID) => {
  if (CategoryID === '0') {
    try {
      const response = await fetch(`${BASEURL}/users/1/links`);
      if (response.ok) {
        const { data } = await response.json();
        return data;
      }
      throw new Error('데이터 불러오기 실패');
    } catch (error) {
      /*eslint-disable-next-line */
      console.error(error);
      return null;
    }
  } else {
    try {
      const response = await fetch(
        `${BASEURL}/users/1/links?folderId=${CategoryID}`,
      );
      if (response.ok) {
        const { data } = await response.json();
        return data;
      }
      throw new Error('데이터 불러오기 실패');
    } catch (error) {
      /*eslint-disable-next-line */
      console.error(error);
      return null;
    }
  }
};
