import { apiInstance } from './axios';

export const getLinkData = async () => {
  try {
    const response = await apiInstance.get('/api/users/4/links');
    return response.data;
  } catch (error) {
    throw new Error('링크 데이터를 불러오는데 실패했습니다');
  }
};

export const getLinkByIdData = async id => {
  try {
    const response = await apiInstance.get(`api/users/4/links?folderId=${id}`);
    return response.data;
  } catch (error) {
    throw new Error('링크 데이터를 불러오는데 실패했습니다');
  }
};
