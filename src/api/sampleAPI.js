import { fetchRequest } from './index';
import { SAMPLE_USER, SAMPLE_FOLDER } from 'config.js';

export const sampleUserInquire = async () => {
  const data = await fetchRequest(SAMPLE_USER, 'GET');
  return data;
};

export const sampleFolderInquire = async () => {
  const data = await fetchRequest(SAMPLE_FOLDER, 'GET');
  return data;
};
