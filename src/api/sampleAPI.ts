import { fetchRequest } from './index';
import { SAMPLE_FOLDER, SAMPLE_USER } from 'config.js';

export const getUser = async () => {
  const data = await fetchRequest({ url: SAMPLE_USER, method: 'GET' });
  return data;
};

export const sampleFolderInquire = async () => {
  const data = await fetchRequest({ url: SAMPLE_FOLDER, method: 'GET' });
  return data;
};
