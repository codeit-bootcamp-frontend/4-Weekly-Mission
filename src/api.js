const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

export async function getFolder({ limit = 9 }) {
  try {
    const query = `limit=${Number(limit) || 1}`;
    const response = await fetch(`${BASE_URL}/sample/folder?${query}`);
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

export async function getUser() {
  try {
    const response = await fetch(`${BASE_URL}/sample/user`);
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

export async function getFolders(userId) {
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
