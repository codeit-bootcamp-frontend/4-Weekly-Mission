import { redirectIfAccessTokenExists } from './utils.js';
const apiURL = 'https://bootcamp-api.codeit.kr/api';

// 공통 API 요청 함수
function requestAPI(endpoint, body) {
  return fetch(`${apiURL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

// 이메일 중복 확인 함수
export async function checkEmailDuplicate(email) {
  try {
    const response = requestAPI('/check-email', { email });
    const data = await response.json();

    if (response.ok) {
      // API 요청이 성공한 경우
      return { success: true, duplicated: data.duplicated };
    } else {
      // API 요청이 실패한 경우
      return { success: false, error: response.statusText };
    }
  } catch (error) {
    // API 요청 중 예외가 발생한 경우
    console.error('이메일 중복 확인 중 오류 발생:', error);
    return { success: false, error: 'Unexpected error occurred' };
  }
}

export async function signUp(email, password) {
  try {
    const response = requestAPI('/sign-up', { email, password });
    if (response.ok) {
      localStorage.setItem('accessToken', response.accessToken); // 로컬 스토리지에 accessToken 저장
      window.location.href = '/folder'; // /folder 페이지로 이동
    } else {
      console.error('회원가입 실패:', response.statusText);
    }
  } catch (error) {
    console.error('회원가입 중 오류 발생:', error);
  }
}

// 로그인 함수
export async function signIn(email, password) {
  try {
    const response = await requestAPI('/sign-in', { email, password });
    console.log(response);
    if (response.ok) {
      localStorage.setItem('accessToken', response.accessToken); // 로컬 스토리지에 accessToken 저장
      window.location.href = '/folder';
    } else {
      console.error('Sign-in failed:', response.statusText);
      return { success: false }; // 로그인 실패를 명시적으로 반환
    }
  } catch (error) {
    console.error('Error during sign-in:', error);
    return { success: false }; // 오류 발생 시 로그인 실패를 명시적으로 반환
  }
}

document.addEventListener('DOMContentLoaded', redirectIfAccessTokenExists);
