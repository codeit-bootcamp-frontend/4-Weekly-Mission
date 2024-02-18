const BASE_URL = "https://bootcamp-api.codeit.kr/api";
const USER_ID = 4;

async function fetchData(endpoint) {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${endpoint} 요청 중 오류가 발생했습니다.`);
  }
  return await response.json();
}

//샘플 폴더
export function getFolder() {
  return fetchData("/sample/folder");
}

//유저 정보
export function getUser() {
  return fetchData(`/users/${USER_ID}`);
}
