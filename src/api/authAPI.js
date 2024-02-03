import { post } from './instance.js';
import API from '../constants/API.js';

const postLogin = async ({ email, password }) => {
  try {
    const res = await post(API.AUTH.SIGN_IN, { email, password });
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const isEmailDuplicate = async ({ email }) => {
  try {
    const res = await post(API.AUTH.EMAIL_DUPLICATE, { email });
    return res;
  } catch (error) {
    console.log('이메일 중복확인 중 오류 발생', error);
    throw error;
  }
};

export { postLogin, isEmailDuplicate };
