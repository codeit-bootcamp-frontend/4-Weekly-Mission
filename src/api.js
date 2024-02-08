const BASE_URL = "https://bootcamp-api.codeit.kr/api/sample";

export const getFolderInfo = async function () {
  try {
    const response = await fetch(`${BASE_URL}/folder`);
    const result = await response.json();
    const folders = await result.folder.links;
    return folders;
  } catch (error) {
    console.log(error);
  }
};
