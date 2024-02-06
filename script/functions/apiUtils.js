import { goToFolderhtml } from '../temporary.js';
import { getTokenInLocalStorage, saveTokenInLocalStorage } from './token.js';

const apiUrl = 'https://bootcamp-api.codeit.kr/api';

const postRequest = (endpoint, userInfo) => {
  return fetch(`${apiUrl}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });
};

export const postSignData = async (endpoint, signInfo) => {
  try {
    const response = await postRequest(endpoint, signInfo);
    if (!response.ok) {
      throw new Error(response.status);
    }
    saveTokenInLocalStorage('accessToken', true); //true 는 아무런 값도 아님.
    window.location.href = goToFolderhtml;
  } catch (error) {
    console.error('Error : Network Connection Failure', error);
  }
};

/**
 *
 * @param {*} endpoint api뒤에 들어갈 이메일 중복 확인을 위한 위치
 * @param {*} data Email 데이터
 * @returns
 */
export const checkEmailData = async (endpoint, emailInfo) => {
  try {
    const response = await postRequest(endpoint, emailInfo);
    if (!response.ok) {
      throw new Error(response.status);
    }
  } catch (error) {
    console.error('Error : Network Connection Failure', error);
  }
};

// 심화 요구사항에 맞춘 임시 코드
export const checkAccessToken = () => {
  if (getTokenInLocalStorage('accessToken')) window.location.href = goToFolderhtml;
};
