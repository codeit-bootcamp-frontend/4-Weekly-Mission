const BASE_URL = "https://bootcamp-api.codeit.kr/api";

//folderPage 폴더 데이터 받아오기
export const getFolderList = async (userId) => {
  const url = `${BASE_URL}/users/${userId}/folders`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (e) {
    console.e("Error fetching links:", error);
    throw e;
  }
};

//folderpage의 폴더 목록 데이터 받아오기
export const getLinks = async (userId, folderId = null) => {
  const url = folderId
    ? `${BASE_URL}/users/${userId}/links?folderId=${folderId}`
    : `${BASE_URL}/api/users/${userId}/links`;
  try {
    const response = await fetch(url);
    return response.json(); // JSON 형식으로 파싱
  } catch (error) {
    console.error("Error fetching links:", error);
    throw error;
  }
};
