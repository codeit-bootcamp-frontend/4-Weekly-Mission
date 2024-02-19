import { apiInstance } from './axios';

export const getSampleFolderData = async () => {
  try {
    const response = await apiInstance.get('/api/sample/folder');
    return response.data;
  } catch (error) {
    throw new Error('샘플 폴더 데이터를 불러오는데 실패했습니다');
  }
};

export const getFolderData = async () => {
  try {
    const response = await apiInstance.get('/api/users/4/folders');
    return response.data;
  } catch (error) {
    throw new Error('폴더 데이터를 불러오는데 실패했습니다');
  }
};
