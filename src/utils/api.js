import { GET_FOLDERS_API_URL, GET_FOLDER_API_URL, GET_USER_API_URL } from '../constant/constant';
import { createAxiosInstance } from './axios';

const axiosBaseUrl = process.env.REACT_APP_AXIOS_BASE_URL;
const axiosHeaders = {
  'Content-Type': process.env.REACT_APP_AXIOS_CONTENT_TYPE
};
const axios = createAxiosInstance(axiosBaseUrl, axiosHeaders);

export const getUser = async () => {
  try {
    const { data: user } = await axios.get(GET_USER_API_URL);
    return user.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const getFolder = async () => {
  try {
    const { data: folder } = await axios.get(GET_FOLDER_API_URL);
    return folder;
  } catch (error) {
    console.error(error);
  }
};

export const getFolders = async () => {
  try {
    const { data: folders } = await axios.get(GET_FOLDERS_API_URL);
    return folders.data;
  } catch (error) {
    console.error(error);
  }
};

export const getLinks = async url => {
  try {
    const { data } = await axios.get(url);
    const links = data.data;
    return links.map(link => {
      const { created_at, image_source, ...rest } = link;
      return { createdAt: created_at, imageSource: image_source, ...rest };
    });
  } catch (error) {
    console.error(error);
  }
};
