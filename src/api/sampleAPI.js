import { fetchRequest } from './index';
import { SAMPLE_USER, SAMPLE_FOLDER } from 'config.js';

export const sampleUserInquire = async () => {
  const res = await fetchRequest(SAMPLE_USER, 'GET');
  return res;
};

export const sampleFolderInquire = async () => {
  const res = await fetchRequest(SAMPLE_FOLDER, 'GET');
  return res;
};
