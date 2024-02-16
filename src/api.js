const BASE_URL = 'https://bootcamp-api.codeit.kr/api/sample/'

export async function getUserInfo(path) {
  const response = await fetch(BASE_URL + path);

  if (!response?.ok) {
    throw new Error("유저 정보를 불러오는데 실패했습니다.")
  }

  const body = await response.json();
  return body;
}