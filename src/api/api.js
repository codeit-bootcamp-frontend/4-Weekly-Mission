const BASE_URL = 'https://bootcamp-api.codeit.kr/api'

export async function getUserInfo(path) {
  const response = await fetch(BASE_URL + path);

  if (!response?.ok) {
    throw new Error("유저 정보를 불러오는데 실패했습니다.")
  }

  const body = await response.json();
  return body;
}

export async function getLinkInfo(path, id='') {
  const query = `folderId=${id}`
  const response = await fetch(`${BASE_URL}/${path}?${query}`);

  if (!response?.ok) {
    throw new Error("링크 정보를 불러오는데 실패했습니다.")
  }

  const body = await response.json();
  return body;
}