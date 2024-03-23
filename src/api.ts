import { fetchAPI } from "./utils/fetchApi";

const BASE_URL = "https://bootcamp-api.codeit.kr/api";
export async function getUser() {
  return fetchAPI(`${BASE_URL}/sample/user`);
}

export async function getFolder() {
  return fetchAPI(`${BASE_URL}/sample/folder`);
}

export async function getFolderType() {
  return fetchAPI(`${BASE_URL}/users/1/folders`);
}

export async function getFolderList(id: number | null) {
  const url =
    id === null
      ? `${BASE_URL}/users/1/links`
      : `${BASE_URL}/users/1/links?folderId=${id}`;
  return fetchAPI(url);
}
