import axios from 'axios';

export const createAxiosInstance = (baseURL = '', headers = {}) => {
  return axios.create({
    baseURL: baseURL,
    headers: headers
  });
};
