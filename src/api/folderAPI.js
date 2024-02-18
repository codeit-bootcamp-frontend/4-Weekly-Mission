import { fetchRequest } from './index';
import { CATEGORY, FOLDER_LINK } from 'config.js';

export const getFolderLink = async folderId => {
  let resData;

  if (folderId !== 'all') {
    resData = await fetchRequest(FOLDER_LINK + `?folderId=${folderId}`, 'GET');
  } else {
    resData = await fetchRequest(FOLDER_LINK, 'GET');
  }

  return resData;
};

export const getCategory = async userId => {
  const data = await fetchRequest(CATEGORY + `/${userId}/folders`, 'GET');
  return data;
};
