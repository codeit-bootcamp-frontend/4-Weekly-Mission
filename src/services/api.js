export function getUserApiUrl() {
  const url = 'users/1';
  return url;
}

// SharedPage에서 사용
export function getSampleFolderApiUrl() {
  const url = 'sample/folder';
  return url;
}

export function getFoldersApiUrl() {
  const url = 'users/1/folders';
  return url;
}

// '전체' 폴더
export function getAllLinksApiUrl() {
  const url = `users/1/links`;
  return url;
}

// '전체'를 제외한 나머지 폴더
export function getOtherLinksApiUrl(folderId) {
  const url = `users/1/links?folderId=${folderId}`;
  return url;
}
