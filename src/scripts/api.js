import { PATH } from './constant.js';

const baseUrl = 'https://bootcamp-api.codeit.kr/api';

export const signin = async (endPoint, signinInfo) => {
  try {
    const response = await fetch(`${baseUrl}${endPoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signinInfo),
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const result = await response.text();
    console.log(result);
    window.location.href = PATH.PAGE_FOLDER;
  } catch (error) {
    console.log(error);
  }
}