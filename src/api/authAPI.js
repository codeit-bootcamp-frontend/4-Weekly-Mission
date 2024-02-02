import { post } from './instance.js';
import API from '../constants/API.js';

const postLogin = async ({ email, password }) => {
  try {
    const res = await post(API.AUTH.SIGN_IN, { email, password });
    return res;
  } catch (error) {
    throw error;
  }
};

export { postLogin };
