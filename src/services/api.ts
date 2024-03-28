/**
 * /api/users/1
 */
export const USER_API_URL = 'users/1';

export type UserIdData = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
  profileImageSource?: string;
};

export type UserIdApiResponse = {
  data: UserIdData[];
};

// SharedPage에서 사용
/**
 * /api/sample/folder
 */
export const SAMPLE_FOLDER_API_URL = 'sample/folder';

export type SampleOwner = {
  id: number;
  name: string;
  profileImageSource: string;
};

export type SampleLink = {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
};

export type SampleFolderData = {
  id: number;
  name: string;
  owner: SampleOwner;
  links: SampleLink[];
  count: number;
};

export type SampleFolderApiResponse = {
  folder: SampleFolderData;
};

/**
 * /api/users/1/folders
 */
export const FOLDERS_API_URL = 'users/1/folders';

type link = {
  count: number;
};

export type FolderData = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: link;
};

export type FolderApiResponse = {
  data: FolderData[];
};

// '전체' 폴더
/**
 * /api/users/1/links
 */
export const LINKS_API_URL = 'users/1/links';

export type LinkData = {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string | null;
  description: string | null;
  image_source: string | null;
  folder_id: number | null;
};

export type LinksApiResponse = {
  data: LinkData[];
};

// '전체'를 제외한 나머지 폴더
export function LINKS_FOLDER_ID_API_URL(folderId: number) {
  const url = `users/1/links?folderId=${folderId}`;
  return url;
}
