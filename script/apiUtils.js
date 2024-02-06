const apiURL = 'https://bootcamp-api.codeit.kr/api';

// 공통 API 요청 함수
async function requestAPI(endpoint, method, body) {
  try {
    const response = await fetch(`${apiURL}${endpoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response;
  } catch (error) {
    console.error('API 요청 오류:', error);
    throw error;
  }
}

// 이메일 중복 확인 함수
export async function checkEmailDuplicate(email) {
  try {
    const response = await requestAPI('/check-email', 'POST', { email });
    if (response.ok) {
      const data = await response.json();
      return data.duplicated; // 중복된 이메일인지 여부 반환
    } else {
      console.error('이메일 중복 확인 실패:', response.statusText);
      return false; // 중복 확인 실패 시 false 반환
    }
  } catch (error) {
    console.error('이메일 중복 확인 중 오류 발생:', error);
    return false; // 중복 확인 중 오류 발생 시 false 반환
  }
}

export async function signUp(email, password) {
  try {
    const response = await requestAPI('/sign-up', 'POST', { email, password });
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
    const response = await requestAPI('/sign-in', 'POST', { email, password });

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

// 페이지 로드 시 accessToken 체크
document.addEventListener('DOMContentLoaded', function () {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    window.location.href = '/folder'; // accessToken이 있으면 /folder 페이지로 이동
  }
});
