const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

async function getAPI(query) {
  try {
    const response = await fetch(`${BASE_URL}/${query}`);

    if (!response?.ok) {
      throw new Error('데이터를 불러오는데 실패했습니다.');
    }

    const body = await response.json();

    return body;
  } catch (err) {
    console.error(err.message);
  }
}

export function getSampleFolder() {
  return getAPI('sample/folder');
}

export function getSampleUser() {
  return getAPI('sample/user');
}

export function getUser() {
  return getAPI('users/1');
}

export function getUserFolders() {
  return getAPI(`users/1/folders`);
}

export function getUserLinks(id) {
  if (!id) {
    return getAPI('users/1/links');
  }

  return getAPI(`users/1/links?folderId=${id}`);
}
