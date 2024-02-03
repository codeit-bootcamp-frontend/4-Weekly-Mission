import { setToken } from "../token.js";

const baseURL = "https://bootcamp-api.codeit.kr";

export const loginInquire = async (data) => {
  try {
    const res = await fetch(`${baseURL}/api/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const token = await res.json();
      setToken(token);
      return res;
    } else {
      throw new Error("로그인 실패");
    }
  } catch (e) {
    console.error(e);
  }
};
