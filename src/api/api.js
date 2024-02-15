const API_URL = 'https://bootcamp-api.codeit.kr';

export async function getUserData() {
  const response = await fetch(`${API_URL}/api/sample/user`);
  const result = await response.json();

  if (!response.ok) {
    return false;
  }
  return result;
}

export async function getFolderData() {
  const response = await fetch(`${API_URL}/api/sample/folder`);
  const result = await response.json();

  if (!response.ok) {
    return false;
  }
  return result;
}
