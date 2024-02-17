import { fetchRequest } from './index';
import { FOLDER } from 'config.js';

export const getFolderLink = async (userId, folderId) => {
  let data;
  if (folderId !== 'all') {
    data = await fetchRequest(
      FOLDER + `${userId}/links?folderId=${folderId}`,
      'GET',
    );
  } else {
    data = await fetchRequest(FOLDER + `${userId}/links`, 'GET');
  }
  return data;
};

export const getCategory = async userId => {
  const data = await fetchRequest(FOLDER + `${userId}/folders`, 'GET');
  return data;
};
