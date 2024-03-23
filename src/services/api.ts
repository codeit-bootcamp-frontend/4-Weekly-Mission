const BASE_URL = "https://bootcamp-api.codeit.kr";

export async function getSampleCards() {
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
        result.message || "Failed to fetch user's card information"
      );
  } catch (error) {
    console.error("Error fetcing user's card information", error);
    throw error;
  }
}

export async function getSelectedCards(folderId: number | undefined) {
  try {
    const response = await fetch(
      `${BASE_URL}/api/users/4/links?folderId=${folderId}`
    );
    const result = await response.json();
    if (response.ok) return result;
    else
      throw new Error(
        result.message || "Failed to fetch selected folder's card information"
      );
  } catch (error) {
    console.error("Error fetching selected folder's card information", error);
    throw error;
  }
}
