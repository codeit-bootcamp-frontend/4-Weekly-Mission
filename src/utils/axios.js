import axios from 'axios';

export const createAxiosInstance = () => {
  const baseURL = process.env.REACT_APP_AXIOS_BASE_URL;
  const headers = {
    'Content-Type': process.env.REACT_APP_AXIOS_CONTENT_TYPE
  };

  return axios.create({
    baseURL: baseURL,
    headers: headers
  });
};

export default createAxiosInstance;
