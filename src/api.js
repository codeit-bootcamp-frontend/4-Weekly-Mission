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
  // return getRequest('/users/1');
  const response = await getRequest('/users/1');
  const folderData = response.map((item) => ({
    ...item,
    profileImageSource: item?.profileImageSource ? item?.profileImageSource : item?.image_source
  }));

  return folderData;
};

export const getFolderList = async () => {
  return getRequest('/users/1/folders');
};

export const getFolderLink = async (folderId) => {
  const folderUrl = folderId && '?folderId=' + folderId;
  const response = await getRequest(`/users/1/links${folderUrl}`);
  const folderData = response.data.map((item) => ({
    ...item,
    createAt: item?.created_at ? item?.created_at : item?.createdAt,
    imageSource: item?.imageSource ? item?.imageSource : item?.image_source
  }));

  return folderData;
};