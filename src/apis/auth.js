import { apiInstance } from './axios';

export const getSampleUser = async () => {
  try {
    const response = await apiInstance.get('/api/sample/user');
    return response.data;
  } catch (error) {
    throw new Error('샘플 유저 데이터를 불러오는데 실패했습니다');
  }
};

export const getUserById = async (userId = 4) => {
  try {
    const response = await apiInstance.get(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('유저 데이터를 불러오는데 실패했습니다.');
  }
};
