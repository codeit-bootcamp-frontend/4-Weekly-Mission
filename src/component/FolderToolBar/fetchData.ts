export const fetchFolders = async () => {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/users/4/folders"
    );
    if (!response.ok) {
      throw new Error("서버에 에러가 있습니다.");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const fetchLinks = async (folderId?: string | number) => {
  const baseUrl = "https://bootcamp-api.codeit.kr/api/users/4/links";
  const url = folderId ? `${baseUrl}?folderId=${folderId}` : baseUrl;
  console.log(folderId);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("서버에 에러가 있습니다.");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
