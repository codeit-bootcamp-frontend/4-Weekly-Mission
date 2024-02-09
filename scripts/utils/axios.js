import axios from 'axios';
const BASE_URL = 'https://bootcamp-api.codeit.kr';
const CONTENT_TYPE = 'application/json';

export const useAxios = () => {
  return axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': CONTENT_TYPE }
  });
};
