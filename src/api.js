const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getFolders() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  const body = await response.json();
  return body;
}

export async function getUser() {
  const response = await fetch(`${BASE_URL}/sample/user`);
  const body = await response.json();
  return body;
}

export async function getFolderList() {
  const response = await fetch(`${BASE_URL}/users/1/folders`);
  const body = await response.json();
  return body;
}
