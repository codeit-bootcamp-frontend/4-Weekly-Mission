const API_ADDRESS = "https://bootcamp-api.codeit.kr/api";

export interface UserProfile {
  email: string;
  image: string;
}

export const getProfile = async (): Promise<UserProfile> => {
  const response = await fetch(`${API_ADDRESS}/users/1`);
  const result = await response.json();

  if (!response.ok) {
    throw new Error("불러오는 데 실패했습니다.");
  }

  const userData: UserProfile = {
    email: result.data[0].email,
    image: result.data[0].image_source,
  };

  return userData;
};

export interface Folder {
  id: string;
  name: string;
  count: number;
}

export const getFolderName = async (): Promise<Folder[]> => {
  const response = await fetch(`${API_ADDRESS}/users/1/folders`);
  const result = await response.json();

  if (!response.ok) {
    throw new Error("불러오는 데 실패했습니다.");
  }

  return result;
};

export interface LinkData {
  id: string;
  imageSource: string;
  createdAt: string;
  description: string;
  url: string;
}

export const getLinkData = async (id?: string): Promise<LinkData[]> => {
  let apiUrl = `${API_ADDRESS}/users/1/links`;
  if (id) {
    apiUrl += `?folderId=${id}`;
  }

  const response = await fetch(apiUrl);
  const result = await response.json();

  if (!response.ok) {
    throw new Error("불러오는 데 실패했습니다.");
  }

  return result;
};

export const getFolderWithLinkCount = async (): Promise<Folder[]> => {
  try {
    const folders = await getFolderName();
    const foldersWithLinkCount = await Promise.all(
      folders.map(async (folder) => {
        const linkData = await getLinkData(folder.id);
        return {
          ...folder,
          count: linkData.length,
        };
      })
    );
    return foldersWithLinkCount;
  } catch (error) {
    throw new Error("폴더 목록을 불러오는 데 실패했습니다.");
  }
};
