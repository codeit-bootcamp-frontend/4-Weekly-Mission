import { setToken } from '../utils/token';
import { fetchRequest } from './index';
import { CHECK_EMAIL_API, SIGNIN_API, SIGNUP_API } from 'config.js';

const loginInquire = async data => {
  try {
    const res = await fetchRequest(SIGNIN_API, 'POST', data);
    if (res.ok) {
      const token = await res.json();
      const accessToken = token.data.accessToken;
      const refreshToken = token.data.refreshToken;
      setToken({ accessToken, refreshToken });
      return res;
    } else {
      throw new Error('로그인 실패');
    }
  } catch (e) {
    console.error(e);
  }
};

const emailCheckInquire = async data => {
  try {
    const res = await fetchRequest(CHECK_EMAIL_API, 'POST', data);
    return res;
  } catch (e) {
    console.error(e);
  }
};

const signUpInquire = async data => {
  try {
    const res = await fetchRequest(SIGNUP_API, 'POST', data);
    if (res.ok) {
      const token = await res.json();
      const accessToken = token.data.accessToken;
      const refreshToken = token.data.refreshToken;
      setToken({ accessToken, refreshToken });
      return res;
    } else {
      throw new Error('회원가입 실패');
    }
  } catch (e) {
    console.error(e);
  }
};

export { loginInquire, emailCheckInquire, signUpInquire };
