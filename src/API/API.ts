import instance from './instance';
import { UserDataType, FolderDataType, CategoryDataType } from '../type';

export const getUserSampleDataAPI = async (): Promise<UserDataType> => {
  const APIData: UserDataType = {
    email: undefined,
    image: undefined,
    error: undefined,
  };
  try {
    const response = await instance.get(`/users/1`);
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
    userName: undefined,
    userImage: undefined,
    name: undefined,
    cardData: undefined,
    error: undefined,
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
    category: undefined,
    error: null,
  };
  try {
    const response = await instance.get('/users/1/folders');
    const { data } = response;
    APIData.category = data.data;
    return APIData;
  } catch (error) {
    APIData.error = error;
    return APIData;
  }
};
