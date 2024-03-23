import axios from 'axios';

const baseURL = process.env.REACT_APP_LINKBRARY_BaseURL;

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken')?.replace(/"/gi, '');

    if (!accessToken) return config;
    config.headers.Authorization = accessToken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    alert(`‼️[ERROR] ${error.response.data.message} `);
    return Promise.reject(error);
  }
);

export default instance;
