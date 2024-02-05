import { API_URL } from "./api.js";

/**
 * 이메일과 비밀번호를 body에 담아 post 요청을 보냅니다.
 * 로그인 성공 시 accessToken을 로컬 스토리지에 저장합니다.
 * @param {Object} data - 이메일과 비밀번호
 * @returns {Promise<Response>}
 */
export const login = async (data) => {
  const response = await fetch(`${API_URL}/sign-in`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (result.data.accessToken) {
    localStorage.setItem("access_token", result.data.accessToken);
  }
  return response;
};

/**
 * 이메일을 body에 담아 post 요청을 보내 이메일 중복을 확인합니다.
 * @param {Object} data - 이메일
 * @returns {Promise<Response>}
 */
export const signup = async (data) => {
  const response = await fetch(`${API_URL}/check-email`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error();
  return response;
};
