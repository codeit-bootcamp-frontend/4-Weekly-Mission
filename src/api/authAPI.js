import { post } from './instance.js';
import API from '../constants/API.js';
import { storeTokenInLocalStorage } from './tokenSetting.js';

const postLogin = async ({ email, password }) => {
  try {
    const res = await post(API.AUTH.SIGN_IN, { email, password });
    storeTokenInLocalStorage('login-token', res.data.accessToken);
    return res;
  } catch (error) {
    console.log('로그인 중 오류 발생');
    throw error;
  }
};

const isEmailDuplicate = async ({ email }) => {
  try {
    const res = await post(API.AUTH.EMAIL_DUPLICATE, { email });
    return res;
  } catch (error) {
    console.log('이메일 중복확인 중 오류 발생');
    throw error;
  }
};

const postSignUp = async ({ email, password }) => {
  try {
    const res = await post(API.AUTH.SIGN_UP, { email, password });
    storeTokenInLocalStorage('signup-token', res.data.accessToken);
    return res;
  } catch (error) {
    console.log('회원가입 중 오류 발생');
    throw error;
  }
};

export { postLogin, isEmailDuplicate, postSignUp };
