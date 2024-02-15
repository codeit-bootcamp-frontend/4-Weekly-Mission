const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

export async function getSampeUser(user) {
  try {
    const response = await fetch(`${BASE_URL}users/1`);
    return response.json();
  } catch (error) {
    return console.log(error);
  }
}

export async function getSampleFolder() {
  try {
    const response = await fetch(`${BASE_URL}sample/folder`);
    return response.json();
  } catch (error) {
    return console.log(error);
  }
}
