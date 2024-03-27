const BASE_URL = "https://bootcamp-api.codeit.kr";
export async function getUser() {
  const response = await fetch(BASE_URL + "/api/sample/user");
  const body = await response.json();
  return body;
}

export async function getFolder() {
  const response = await fetch(BASE_URL + "/api/sample/folder");
  const body = await response.json();
  return body;
}

export async function getUserFolder() {
  const response = await fetch(BASE_URL + "/api/users/4/folders");
  const body = await response.json();
  return body;
}

export async function getUserLinks() {
  const response = await fetch(BASE_URL + "/api/users/4/links");
  const body = await response.json();
  return body;
}
