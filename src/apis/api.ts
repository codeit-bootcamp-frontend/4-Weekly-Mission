import { FolderUser, FolderLink } from '../types/type';

const baseUrl = 'https://bootcamp-api.codeit.kr/api';

const getRequest = async (endPoint: string) => {
  try {
    const response = await fetch(`${baseUrl}${endPoint}`);
    if (!response.ok) {
      throw new Error(`${endPoint}에서 불러오는데 실패했습니다`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const getSharedUser = async () => {
  return getRequest('/sample/user');
};

export const getSharedFolder = async () => {
  // return getRequest('/sample/folder');
  const response = await getRequest('/sample/folder');
  return response;
};

export const getFolderUser = async () => {
  const response = await getRequest('/users/4');
  const folderData = response.data.map((item: FolderUser) => ({
    ...item,
    profileImageSource: item?.profileImageSource ? item?.profileImageSource : item?.image_source,
  }));

  return folderData;
};

export const getFolderList = async () => {
  const response = await getRequest('/users/4/folders');
  return response.data;
};

export const getFolderLink = async (folderId: string) => {
  const folderUrl = folderId && '?folderId=' + folderId;
  const response = await getRequest(`/users/4/links${folderUrl}`);
  const folderData = response.data.map((item: FolderLink) => ({
    ...item,
    createdAt: item?.created_at ? item?.created_at : item?.createdAt,
    imageSource: item?.imageSource ? item?.imageSource : item?.image_source,
  }));

  return folderData;
};
