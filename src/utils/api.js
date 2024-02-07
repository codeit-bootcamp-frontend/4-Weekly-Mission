import { createAxiosInstance } from './axios';

const axiosBaseUrl = process.env.REACT_APP_AXIOS_BASE_URL;
const axiosHeaders = {
  'Content-Type': process.env.REACT_APP_AXIOS_CONTENT_TYPE
};
const axios = createAxiosInstance(axiosBaseUrl, axiosHeaders);

export const getUser = async () => {
  try {
    const { data: user } = await axios.get('/sample/user');
    return user;
  } catch (error) {
    console.error(error);
  }
};
