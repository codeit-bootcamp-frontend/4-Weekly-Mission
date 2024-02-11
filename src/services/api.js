const BASE_URL = "https://bootcamp-api.codeit.kr";

export async function getCards() {
  const response = await fetch(`${BASE_URL}/api/sample/folder`);
  const result = await response.json();
  return result;
}

export async function getUsers() {
  const response = await fetch(`${BASE_URL}/api/sample/user`);
  const result = await response.json();

  if (response.ok) return result;
}
