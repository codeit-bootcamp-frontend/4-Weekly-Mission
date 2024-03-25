const baseUrl = 'https://bootcamp-api.codeit.kr/api';

interface folder {
  id: number;
  created_at: string;
  image_source: string;
}

interface folderUser extends folder {
  name: string;
  email: string;
  auth_id: string;
  profileImageSource: string;
}

interface folderLink extends folder {
  updated_at: any;
  url: string;
  title?: string;
  description?: string;
  folder_id: any;
  createdAt?: string;
  imageSource?: string;
}

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
  return getRequest('/sample/folder');
};

export const getFolderUser = async () => {
  const response = await getRequest('/users/1');
  const folderData = response.data.map((item: folderUser) => ({
    ...item,
    profileImageSource: item?.profileImageSource ? item?.profileImageSource : item?.image_source,
  }));

  return folderData;
};

export const getFolderList = async () => {
  return getRequest('/users/1/folders');
};

export const getFolderLink = async (folderId: string) => {
  const folderUrl = folderId && '?folderId=' + folderId;
  const response = await getRequest(`/users/1/links${folderUrl}`);
  const folderData = response.data.map((item: folderLink) => ({
    ...item,
    createdAt: item?.created_at ? item?.created_at : item?.createdAt,
    imageSource: item?.imageSource ? item?.imageSource : item?.image_source,
  }));
  console.log(folderData);

  return folderData;
};
