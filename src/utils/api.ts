const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

async function getApi(url: string) {
  const response = await fetch(url);
  const body = await response.json();
  return body;
}

export function getSampleUser() {
  return getApi(`${BASE_URL}/sample/user`);
}
export function getSampleFolder() {
  return getApi(`${BASE_URL}/sample/folder`);
}
export function getUser() {
  return getApi(`${BASE_URL}/users/1`);
}
export function getFolderList() {
  return getApi(`${BASE_URL}/users/1/folders`);
}
export function getFolder(id: number) {
  if (id === 0) return getApi(`${BASE_URL}/users/1/links`);
  else return getApi(`${BASE_URL}/users/1/links?folderId=${id}`);
}
