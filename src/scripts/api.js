import { PATH, TOKEN } from './constant.js';
import { setLocalToken } from './util.js';

const baseUrl = 'https://bootcamp-api.codeit.kr/api';

const postRequest = (endPoint, userInfo) => {
  return fetch(`${baseUrl}${endPoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });
}

export const sign = async (endPoint, signInfo) => {
  try {
    const response = await postRequest(endPoint, signInfo);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const result = await response.json();

    setLocalToken(TOKEN.ACCESS_TOKEN, result.data.accessToken);
    window.location.href = PATH.PAGE_FOLDER;
  } catch (error) {
    console.log(error);
  }
}

export const checkEmailInfo = async (endPoint, emailInfo) => {
  try {
    const response = await postRequest(endPoint, emailInfo);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}