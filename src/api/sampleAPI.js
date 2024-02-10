import { fetchRequest } from './index';
import { SAMPLE_USER } from 'config.js';

export const sampleUserInquire = async () => {
  try {
    const res = await fetchRequest(SAMPLE_USER, 'GET');
    return res;
  } catch (e) {
    console.error(e);
  }
};
