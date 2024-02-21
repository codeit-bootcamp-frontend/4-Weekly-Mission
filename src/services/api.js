import { API, API_FOLDER, API_USER } from "utils/constants/api";

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

/**
 * 유저 아이디를 받아서 해당 유저의 모든 폴더 데이터 목록을 리턴합니다.
 * @param {number} userId
 * @returns {object} 유저의 폴더 데이터 객체
 */
export const fetchUserFolderData = async (userId) => {
  try {
    const response = await fetch(`${API}/users/${userId}/folders`);
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
 * 유저 아이디와 폴더 아이디를 받아서 해당 폴더에 있는 링크 데이터 목록을 리턴합니다.
 * @param {number} userId
 * @param {number} folderId
 * @returns {object} 해당 폴더에 있는 링크 데이터 객체
 */
export const fetchUserLinkData = async (userId, folderId) => {
  try {
    let apiUrl = `${API}/users/${userId}/links`;
    if (folderId !== null) {
      apiUrl += `?folderId=${folderId}`;
    }
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
};
