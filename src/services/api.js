const BASE_URL = "https://bootcamp-api.codeit.kr";

export async function getSampleCards() {
  /* const response = await fetch(`${BASE_URL}/api/sample/folder`);
  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch sample cards");
  }
  return await response.json(); */
  try {
    const response = await fetch(`${BASE_URL}/api/sample/folder`);
    const result = await response.json();
    if (response.ok) return result;
    else throw new Error(result.message || "Failed to fetch sample cards");
  } catch (error) {
    console.error("Error fetching sample cards", error);
    throw error;
  }
}

// axios 쓸 때 코드
/* export const getSampleFolderData = async () => {
  try {
    const response = await apiInstance.get('/api/sample/folder');
    return response.data;
  } catch (error) {
    throw new Error('샘플 폴더 데이터를 불러오는데 실패했습니다');
  }
}; */

// 아래와 같이 파일 분리해서 사용할 수 있음.
/* import axios from 'axios';

const API_BASE_URL = 'https://bootcamp-api.codeit.kr';

export const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
}); */

export async function getSampleUser() {
  try {
    const response = await fetch(`${BASE_URL}/api/sample/user`);
    const result = await response.json();
    if (response.ok) return result;
    else
      throw new Error(
        result.message || "Failed to fetch sample user information"
      );
  } catch (error) {
    console.error("Error fetching sample user information", error);
    throw error;
  }
}

export async function getUser() {
  try {
    const response = await fetch(`${BASE_URL}/api/users/4`);
    const result = await response.json();
    if (response.ok) return result;
    else throw new Error(result.message || "Failed to fetch user information");
  } catch (error) {
    console.error("Error fetching user information", error);
    throw error;
  }
}

export async function getFolders() {
  try {
    const response = await fetch(`${BASE_URL}/api/users/4/folders`);
    const result = await response.json();
    if (response.ok) return result;
    else
      throw new Error(result.message || "Failed to fetch folder information");
  } catch (error) {
    console.error("Error fetching folder information", error);
    throw error;
  }
}

export async function getCards() {
  try {
    const response = await fetch(`${BASE_URL}/api/users/4/links`);
    const result = await response.json();
    if (response.ok) return result;
    else
      throw new Error(
        result.message || `Failed to fetch user's card information`
      );
  } catch (error) {
    console.error(`Error fetcing user's card information`, error);
    throw error;
  }
}

export async function getSelectedCards(folderId) {
  try {
    const response = await fetch(
      `${BASE_URL}/api/users/4/links?folderId=${folderId}`
    );
    const result = await response.json();
    if (response.ok) return result;
    else
      throw new Error(
        result.message || `Failed to fetch selected folder's card information`
      );
  } catch (error) {
    console.error(`Error fetching selected folder's card information', error`);
    throw error;
  }
}
