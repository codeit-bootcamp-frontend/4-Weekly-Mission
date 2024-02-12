import { fetchRequest } from './index';
import { SAMPLE_USER, SAMPLE_FOLDER } from 'config.js';

export const sampleUserInquire = async () => {
  try {
    const res = await fetchRequest(SAMPLE_USER, 'GET');
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const sampleFolderInquire = async () => {
  try {
    const res = await fetchRequest(SAMPLE_FOLDER, 'GET');
    return res;
  } catch (e) {
    console.error(e);
  }
};
