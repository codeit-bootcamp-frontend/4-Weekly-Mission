const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

export async function getUser() {
  try {
    const response = await fetch(`${BASE_URL}/sample/user`);
    if (!response.ok) {
      throw new Error('Network 오류');
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error(error);
    return { error: true, message: error.message };
  }
}

export async function getFolder() {
  try {
    const response = await fetch(`${BASE_URL}/sample/folder`);
    if (!response.ok) {
      throw new Error('Network 오류');
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error(error);
    return { error: true, message: error.message };
  }
}

export async function getFolderType() {
  try {
    const response = await fetch(`${BASE_URL}/users/1/folders`);
    if (!response.ok) {
      throw new Error('Network 오류');
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error(error);
    return { error: true, message: error.message };
  }
}
export async function getFolderList(id) {
  try {
    let response;
    if (id === null) {
      response = await fetch(`${BASE_URL}/users/1/links`);
    } else {
      response = await fetch(`${BASE_URL}/users/1/links?folderId=${id}`);
    }

    if (!response.ok) {
      throw new Error('Network 오류');
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error(error);
    return { error: true, message: error.message };
  }
}
