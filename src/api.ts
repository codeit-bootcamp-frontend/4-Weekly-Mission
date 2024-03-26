const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

async function fetchData(endpoint: string) {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  const body = await response.json();
  return body;
}

export async function getFolders() {
  return fetchData('sample/folder');
}

export async function getUser() {
  return fetchData('users/1');
}

export async function getFolderList() {
  return fetchData('users/1/folders');
}

export async function getFolderLinks() {
  return fetchData('users/1/links');
}

export async function fetchFolderLinks(folderId: number) {
  return fetchData(`users/1/links?${folderId}`);
}
