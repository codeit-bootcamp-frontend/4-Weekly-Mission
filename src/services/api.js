import {  API_FOLDER, API_USER } from "utils/constants/api";

/**
 * 유저 아이디를 받아 유저 정보를 리턴합니다.
 * @param {number} userId
 * @returns {object} 유저 데이터
 */
export const fetchUserData = async (userId) => {
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

/**
 * 샘플 데이터를 리턴합니다.
 * @returns 폴더 정보 데이터
 */
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

