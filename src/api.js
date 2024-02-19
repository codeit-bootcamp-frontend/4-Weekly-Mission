const BASE_API_URL = "https://bootcamp-api.codeit.kr/api";

async function fetchFromAPI(endpoint) {
  const response = await fetch(`${BASE_API_URL}/${endpoint}`);
  if (!response.ok) {
    throw new Error(`error`);
  }
  const body = await response.json();
  return body;
}

export async function getLinksUser() {
  return fetchFromAPI("sample/user");
}

export async function getLinksFolder() {
  return fetchFromAPI("sample/folder");
}

export async function getLinksUserIdFolder() {
  return fetchFromAPI(`users/4/folders`);
}

export async function getLinksUserIdLinks(folderId = "") {
  return fetchFromAPI(`users/4/Links?folderId=${folderId}`);
}
