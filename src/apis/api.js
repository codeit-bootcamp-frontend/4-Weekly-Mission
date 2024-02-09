export async function getUser() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
}

export async function getFolder() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  const body = await response.json();
  return body;
}