const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

export async function getUserData() {
  try {
    const response = await fetch(`${BASE_URL}sample/user`);
    return response.json();
  } catch (error) {
    return console.log(error);
  }
}

export async function getFilderData() {
  try {
    const response = await fetch(`${BASE_URL}sample/folder`);
    return response.json();
  } catch (error) {
    return console.log(error);
  }
}
