import { BASE_URL } from 'util/axiosInstance';

export const getFolders = async () => {
  const res = await fetch(`${BASE_URL}users/1/links`);
  const result = res.json();
  return result;
};

export const getFolder = async ({ folderId }) => {
  const query = `?folderlId=${folderId}`;
  const res = await fetch(`${BASE_URL}users/1/links${query}`);
  if (!res.ok) {
    throw new Error('폴더를 불러오는데 실패했습니다.');
  }
  return res.json();
};
