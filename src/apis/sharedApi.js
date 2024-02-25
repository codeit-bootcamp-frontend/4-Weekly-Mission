const BASE_URL = "https://bootcamp-api.codeit.kr/api";

//shared폴더 card리스트 데이터 받아오기
export const fetchShareCards = async () => {
  try {
    const response = await fetch(`${BASE_URL}/sample/folder`);
    if (response.ok) {
      const data = await response.json();
      return data.folder.links;
    } else {
      throw new Error("Failed to fetch cards");
    }
  } catch (error) {
    console.error("Error fetching cards:", error);
    return [];
  }
};
