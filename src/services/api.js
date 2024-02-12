const API_URL = 'https://bootcamp-api.codeit.kr/api';

export async function getFolder() {
  try {
    const response = await fetch(`${API_URL}/sample/folder`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error('통신 오류');
  }
}
export async function getUser() {
  try {
    const response = await fetch(`${API_URL}/sample/user`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error('통신 오류');
  }
}
