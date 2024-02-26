import { BASE_URL } from 'util/axiosInstance';

export const getFolderList = async () => {
  const res = await fetch(`${BASE_URL}/users/1/folders`);
  const result = await res.json();
  return result;
};
