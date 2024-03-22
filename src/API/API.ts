import instance from './instance';
import {
  UserDataType,
  FolderDataType,
  CategoryDataType,
  folderCardDataType,
} from '../type';

export const getUserSampleDataAPI = async (): Promise<UserDataType> => {
  const APIData: UserDataType = {
    email: null,
    image: null,
    error: null,
  };
  try {
    const response = await instance.get(`/users/4`);
    const { data } = response;
    APIData.email = data.data[0].email;
    APIData.image = data.data[0].image_source;
    return APIData;
  } catch (error) {
    APIData.error = error;
    return APIData;
  }
};

export const getFolderDataAPI = async (): Promise<FolderDataType> => {
  const APIData: FolderDataType = {
    userName: null,
    userImage: null,
    name: null,
    cardData: null,
    error: null,
  };
  try {
    const response = await instance.get(`/sample/folder`);
    const { data } = response;
    APIData.userName = data.folder.owner.name;
    APIData.userImage = data.folder.owner.profileImageSource;
    APIData.name = data.folder.name;
    APIData.cardData = data.folder.links;
    return APIData;
  } catch (error) {
    APIData.error = error;
    return APIData;
  }
};

export const getCategoryDataAPI = async (): Promise<CategoryDataType> => {
  const APIData: CategoryDataType = {
    category: null,
    error: null,
  };
  try {
    const response = await instance.get('/users/4/folders');
    const { data } = response;
    APIData.category = data.data;
    return APIData;
  } catch (error) {
    APIData.error = error;
    return APIData;
  }
};

export const getCardDataAPI = async (
  folderID: string | null = null,
): Promise<folderCardDataType> => {
  const APIData: folderCardDataType = {
    card: null,
    error: null,
  };
  if (folderID && folderID !== '0') {
    try {
      const response = await instance.get(
        `/users/4/links?folderId=${folderID}`,
      );
      const { data } = response;
      APIData.card = data.data;
      return APIData;
    } catch (error) {
      APIData.error = error;
      return APIData;
    }
  }
  try {
    const response = await instance.get('/users/4/links');
    const { data } = response;
    APIData.card = data.data;
    return APIData;
  } catch (error) {
    APIData.error = error;
    return APIData;
  }
};
