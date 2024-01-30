import { API_URL } from "./api.js";

/**
 *  
 * @param {object} 이메일과 비밀번호
 */
export const login = async (data) => {
  const response = await fetch(`${API_URL}/api/sign-in`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (result.data.accessToken) {
    localStorage.setItem("user", result.data.accessToken);
  }
  return response;
};

/**
 * 
 * @param {object} 이메일
 */
export const signup = async (data) => {
  const response = await fetch(`${API_URL}/api/check-email`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error();
  return response;
};
