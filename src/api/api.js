import axios from 'axios';

const baseURL = process.env.REACT_APP_LINKBRARY_BaseURL;

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
