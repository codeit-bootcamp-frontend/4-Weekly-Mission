const BASE_URL = "https://bootcamp-api.codeit.kr/";

export async function getProfile() {
  const query = "api/sample/user";
  const response = await fetch(`${BASE_URL}${query}`);
  if (!response.ok) {
    throw new Error("사용자의 프로필을 불러오는데 실패했습니다.");
  }

  const result = await response.json();
  return result;
}

export async function getFolder() {
  const query = "api/sample/folder";
  const response = await fetch(`${BASE_URL}${query}`);
  if (!response.ok) {
    throw new Error("폴더를 불러오는데 실패했습니다.");
  }

  const result = await response.json();
  return result;
}
