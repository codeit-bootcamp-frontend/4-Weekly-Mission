const API_BASE_URL = "https://bootcamp-api.codeit.kr/api";

// 폴더 데이터 받아오기 - Favorites.js
export const fetchFolderData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/sample/folder`);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data.folder;
  } catch (error) {
    console.error("Folder Error:", error);
    throw error; // 에러를 다시 throw하여 호출 측에서 처리
  }
};

// 폴더 목록 가져오기 - Folder.js
export const fetchFolderCardData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/1/folders`);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Folder Error:", error);
    throw error;
  }
};

// 링크 데이터 가져오기 - Folder.js
export const fetchLinks = async (folderId) => {
  const url = folderId
    ? `${API_BASE_URL}/users/1/links?folderId=${folderId}`
    : `${API_BASE_URL}/links`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Link Error:", error);
    throw error;
  }
};
