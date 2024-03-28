import { setToken } from '../utils/token';
import { fetchRequest } from './index';
import { CHECK_EMAIL_API, SIGNIN_API, SIGNUP_API } from 'config.js';

const loginInquire = async data => {
  const res = await fetchRequest({
    url: SIGNIN_API,
    method: 'POST',
    data: data,
  });
  if (res.ok) {
    const token = await res.json();
    const accessToken = token.data.accessToken;
    const refreshToken = token.data.refreshToken;
    setToken({ accessToken, refreshToken });
    return res;
  }
};

const emailCheckInquire = async data => {
  const res = await fetchRequest({
    url: CHECK_EMAIL_API,
    method: 'POST',
    data: data,
  });
  return res;
};

const signUpInquire = async data => {
  const res = await fetchRequest({
    url: SIGNUP_API,
    method: 'POST',
    data: data,
  });
  if (res.ok) {
    const token = await res.json();
    const accessToken = token.data.accessToken;
    const refreshToken = token.data.refreshToken;
    setToken({ accessToken, refreshToken });
    return res;
  }
};

export { loginInquire, emailCheckInquire, signUpInquire };
