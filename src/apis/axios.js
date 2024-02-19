import axios from 'axios';

const API_BASE_URL = 'https://bootcamp-api.codeit.kr';

export const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
