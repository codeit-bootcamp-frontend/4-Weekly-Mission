const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

export async function getSampeUser(user) {
  try {
    const response = await fetch(`${BASE_URL}users/1`);
    // HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    // 네트워크 연결 오류 처리
    console.error("Network error:", error);
    return null;
  }
}

export async function getSampleFolder() {
  try {
    const response = await fetch(`${BASE_URL}sample/folder`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    // 네트워크 연결 오류 처리
    console.error("Network error:", error);
    return null;
  }
}

export async function getUserFolder() {
  try {
    const response = await fetch(`${BASE_URL}users/1/folders`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    // 네트워크 연결 오류 처리
    console.error("Network error:", error);
    return null;
  }
}

export async function getFolderLink(id) {
  try {
    if (id) {
      const response = await fetch(
        `${BASE_URL}users/1/links?folderId=${id}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    } else {
      const response = await fetch(`${BASE_URL}users/1/links`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    }
  } catch (error) {
    // 네트워크 연결 오류 처리
    console.error("Network error:", error);
    return null;
  }
}
