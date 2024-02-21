const baseUrl = 'https://bootcamp-api.codeit.kr/api';

const getRequest = async (endPoint) => {
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
}
export const getSharedUser = async () => {
  return getRequest('/sample/user');
};

export const getSharedFolder = async () => {
  return getRequest('/sample/folder');
};

export const getFolderUser = async () => {
  return getRequest('/users/1');
};

export const getFolderList = async () => {
  return getRequest('/users/1/folders');
};

export const getFolderLink = async (folderId) => {
  const folderUrl = folderId && '?folderId=' + folderId;
  return getRequest(`/users/1/links${folderUrl}`);
};