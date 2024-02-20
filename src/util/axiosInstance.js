import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/',
});

export const { BASE_URL } = axiosInstance;
