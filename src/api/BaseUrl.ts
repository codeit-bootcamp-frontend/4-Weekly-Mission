const baseUrl = 'https://bootcamp-api.codeit.kr/api';

const getRequest = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`${endpoint}에서 불러오는데 실패했습니다`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

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

export const getFolderLink = async (folderId: string) => {
  const folderUrl = folderId ? `?folderId=${folderId}` : '';
  const data: any = await getRequest(`/users/1/links${folderUrl}`);
  const result = data.data.map((item: any) => ({
    ...item,
    createdAt: item.created_at,
    imageSource: item.image_source,
  }));
  return result;
};
