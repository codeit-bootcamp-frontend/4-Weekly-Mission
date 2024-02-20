const BASE_URL = "https://bootcamp-api.codeit.kr";

export async function getUser() {
  const response = await fetch(`${BASE_URL}/api/sample/user`);
  if (!response.ok) {
    throw new Error("유저 정보를 불러올 수 없습니다.");
  }
  const user = await response.json();
  return user;
}

export async function getFolder() {
  const response = await fetch(`${BASE_URL}/api/sample/folder`);
  if (!response.ok) {
    throw new Error("폴더 정보를 불러올 수 없습니다.");
  }
  const folder = await response.json();
  return folder;
}
