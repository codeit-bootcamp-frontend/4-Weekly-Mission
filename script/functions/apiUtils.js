import { goToFolderhtml } from '../temporary.js';
import { getTokenInLocalStorage, saveTokenInLocalStorage } from './token.js';

const apiUrl = 'https://bootcamp-api.codeit.kr/docs';

const postRequest = (endpoint, data) => {
  return fetch(`${apiUrl}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const postData = async (endpoint, data) => {
  try {
    const response = await postRequest(endpoint, data);
    const responseData = await response.json();
    if (responseData.success) {
      saveTokenInLocalStorage('accessToken', true); //true 는 아무런 값도 아님.
      window.location.href = goToFolderhtml;
      return;
    }
    console.error('Login Failure');
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
export const checkEmailData = async (endpoint, emaildata, data) => {
  try {
    const response = await postRequest(endpoint, emaildata);
    const responseData = await response.json();
    if (responseData.success) {
      console.error('Same Email');
      return;
    }
    const responseSignUp = postRequest('sign-up', data);
    const responseDataSignUp = await responseSignUp.json();
    if (responseDataSignUp.success) {
      saveTokenInLocalStorage('accessToken', true); //true 는 아무런 값도 아님.
      window.location.href = goToFolderhtmllderhtml;
      return;
    }
  } catch (error) {
    console.error('Error : Network Connection Failure', error);
  }
};

// 심화 요구사항에 맞춘 임시 코드
export const myLocalStorageHaveAccessToken = () => {
  if (getTokenInLocalStorage('accessToken')) window.location.href = goToFolderhtml;
};
