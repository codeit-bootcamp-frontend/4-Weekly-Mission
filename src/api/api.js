const URL = "https://bootcamp-api.codeit.kr/api";

export const getUser = async ({ userId }) => {
  try {
    const response = await fetch(`${URL}/users/${userId}`);
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getFolder = async () => {
  try {
    const response = await fetch(`${URL}/sample/folder`);
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Error fetching folder data:", error);
    throw error;
  }
};

export const getFolderList = async ({ userId }) => {
  try {
    const response = await fetch(`${URL}/users/${userId}/folders`);
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Error fetching folderList data", error);
    throw error;
  }
};

export const getLink = async ({ userId, folderId }) => {
  try {
    const query = `?folderId=${folderId}`;

    const response = await fetch(
      `${URL}/users/${userId}/links${folderId ? `${query}` : ""}`
    );
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Error fetching link data", error);
    throw error;
  }
};
