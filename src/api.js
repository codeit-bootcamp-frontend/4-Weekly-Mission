const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getUser() {
  const response = await fetch(`${BASE_URL}/sample/user`);
  const body = await response.json();
  return body;
}

export async function getFolder() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  const body = await response.json();
  return body;
}

export async function getFolders() {
  const userId = 1;
  const response = await fetch(`${BASE_URL}/users/${userId}/folders`);
  const body = await response.json();
  return body;
}

export async function getFolderLinks(id) {
  const userId = 1;
  const folderId = id === "" ? null : +id;
  const url = `${BASE_URL}/users/${userId}/links${
    folderId ? `?folderId=${folderId}` : ""
  }`;
  const response = await fetch(url);
  return await response.json();
}
