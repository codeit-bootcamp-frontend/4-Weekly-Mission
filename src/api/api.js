const URL = " https://bootcamp-api.codeit.kr/api/sample";

export async function User() {
  try {
    const response = await fetch(`${URL}/user`);
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}

export async function FolderData() {
  const response = await fetch(`${URL}/folder`);
  const body = await response.json();
  return body;
}
