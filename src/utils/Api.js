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

export async function getUserFolder() {
  try {
    const response = await fetch(`${BASE_URL}users/1/folders`);
    return response.json();
  } catch (error) {
    return console.log(error);
  }
}

export async function getFolderLink(id) {
  try {
    if (id) {
      const response = await fetch(
        `${BASE_URL}users/1/links?folderId=${id}`,
      );
      return response.json();
    } else {
      const response = await fetch(`${BASE_URL}users/1/links`);
      return response.json();
    }
  } catch (error) {
    return console.log(error);
  }
}
