const API_URL = 'https://bootcamp-api.codeit.kr/api';

export async function fetchData(endPoint: string) {
  try {
    const response = await fetch(`${API_URL}${endPoint}`);
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error('Network error');
  }
}

export async function getFolder() {
  return fetchData('/sample/folder');
}
export async function getUser() {
  return fetchData('/users/1');
}
export async function getFolderList() {
  return fetchData('/users/4/folders');
}
export async function getLinkList(folderId = '') {
  return fetchData(`/users/4/links?folderId=${folderId}`);
}
