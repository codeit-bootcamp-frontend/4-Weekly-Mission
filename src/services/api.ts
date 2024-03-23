export const USER_API_URL = 'users/1';

// SharedPage에서 사용
export const SAMPLE_FOLDER_API_URL = 'sample/folder';

export const FOLDERS_API_URL = 'users/1/folders';

// '전체' 폴더
export const LINKS_API_URL = 'users/1/links';

// '전체'를 제외한 나머지 폴더
export function LINKS_FOLDER_ID_API_URL(folderId) {
  const url = `users/1/links?folderId=${folderId}`;
  return url;
}
