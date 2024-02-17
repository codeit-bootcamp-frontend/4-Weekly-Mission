import { fetchRequest } from './index';
import { SAMPLE_FOLDER, SAMPLE_USER } from 'config.js';

export const getUser = async () => {
  const data = await fetchRequest(SAMPLE_USER, 'GET');
  return data;
};

export const sampleFolderInquire = async () => {
  const data = await fetchRequest(SAMPLE_FOLDER, 'GET');
  return data;
};
