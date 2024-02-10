const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getFolder() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error("폴더 정보를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
