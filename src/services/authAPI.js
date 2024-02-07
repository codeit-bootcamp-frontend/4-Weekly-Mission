import { setToken } from "../utils/token.js";
import { AUTH } from "../constants/API.js";
import { fetchRequest } from "./index.js";

const loginInquire = async (data) => {
  try {
    const res = await fetchRequest(AUTH.signIn, "POST", data);
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

const emailCheckInquire = async (data) => {
  try {
    const res = await fetchRequest(AUTH.checkEmail, "POST", data);
    return res;
  } catch (e) {
    console.error(e);
  }
};

const signUpInquire = async (data) => {
  try {
    const res = await fetchRequest(AUTH.signUp, "POST", data);
    if (res.ok) {
      const token = await res.json();
      setToken(token);
      return res;
    } else {
      throw new Error("회원가입 실패");
    }
  } catch (e) {
    console.error(e);
  }
};

export { loginInquire, emailCheckInquire, signUpInquire };
