const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

export async function getFolder({ limit = 9 }) {
  const query = `limit=${Number(limit) || 1}`;
  const response = await fetch(`${BASE_URL}/sample/folder?${query}`);
  if (!response.ok) {
    throw new Error('폴더를 불러오는데 실패했습니다.');
  }
  const data = await response.json();
  return data;
}

export async function getUser() {
  const response = await fetch(`${BASE_URL}/sample/user`);
  if (!response.ok) {
    throw new Error('유저를 불러오는데 실패했습니다.');
  }
  const data = await response.json();
  return data;
}
