import { fetchRequest } from './index';
import { FOLDER_LINK } from 'config.js';

export const getFolderLink = async data => {
  const { folderId = 'all' } = data;
  let resData;

  if (folderId !== 'all') {
    resData = await fetchRequest(FOLDER_LINK + `?folderId=${folderId}`, 'GET');
  } else {
    resData = await fetchRequest(FOLDER_LINK, 'GET');
  }

  return resData;
};

// export const getCategory = async userId => {
//   const data = await fetchRequest(FOLDER + `/${userId}/folders`, 'GET');
//   return data;
// };
