const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

export async function getFolder() {
  try {
    const response = await fetch(`${BASE_URL}/sample/folder`);
    if (!response.ok) {
      throw new Error('폴더를 불러오는데 실패했습니다.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getUser(userId: string) {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    if (!response.ok) {
      throw new Error('유저를 불러오는데 실패했습니다.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getFolders(userId: string) {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}/folders`);
    if (!response.ok) {
      throw new Error('폴더 목록을 불러오는데 실패했습니다.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getLinks(userId: string, folderId: string) {
  const query = `${folderId && 'folderId=' + folderId}`;
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}/links?${query}`);
    if (!response.ok) {
      throw new Error('링크 목록을 불러오는데 실패했습니다.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
