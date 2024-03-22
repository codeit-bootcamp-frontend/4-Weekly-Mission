import {  API_FOLDER, API_USER } from "utils/constants/api";

export const fetchUserData = async (userId: string) => {
  try {
    const response = await fetch(`${API_USER}/${userId}`);
    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchFolderData = async () => {
  try {
    const response = await fetch(API_FOLDER);
    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

