import instance from './instance';
import { UserDataType } from '../type';

const getUserSampleDataAPI = async (): Promise<UserDataType> => {
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

export default getUserSampleDataAPI;
