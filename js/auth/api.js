import { BASE_URL, SIGN_IN_ENDPOINT, CHECK_EMAIL_ENDPOINT, SIGN_UP_ENDPOINT } from './constants.js';

/**
 * 로그인 시도 api
 * @param {string} email - 사용자의 이메일 주소
 * @param {string} password - 사용자의 비밀번호
 * @returns {Promise<Object>} - 로그인 요청의 결과를 반환
 */
export async function signIn(email, password) {
  const response = await fetch(`${BASE_URL}${SIGN_IN_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}

/**
 * 이메일 중복체크 api
 * @param {string} email - 체크할 이메일 주소
 * @returns {Promise<Object>} - 이메일 중복 체크 요청의 결과를 반환
 */
export async function checkEmail(email) {
  const response = await fetch(`${BASE_URL}${CHECK_EMAIL_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  return response.json();
}

/**
 * 회원가입 api
 * @param {string} email - 사용자가 사용할 이메일 주소
 * @param {string} password - 사용자가 설정한 비밀번호
 * @returns {Promise<Object>} - 회원가입 요청의 결과를 반환
 */
export async function signUp(email, password) {
  const response = await fetch(`${BASE_URL}${SIGN_UP_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}
