const API_BASE_URL = "https://bootcamp-api.codeit.kr/api";

// 폴더 데이터 받아오기 - Favorites.js
export async function fetchFolderData() {
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
}
