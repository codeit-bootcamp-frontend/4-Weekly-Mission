export async function getProfile() {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/sample/user`,
    {
      method: 'GET',
    }
  );
  if (!response.ok) {
    throw new Error('프로필 정보가 존재하지 않습니다.');
  }
  const body = await response.json();
  return body;
}

export async function getBookmark() {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/sample/folder`,
    {
      method: 'GET',
    }
  );
  if (!response.ok) {
    throw new Error('즐겨찾기 정보를 불러오지 못했습니다.');
  }
  const body = await response.json();
  return body;
}
