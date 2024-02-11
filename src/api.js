const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

export const getUser = async () => {
  const response = await fetch(`${BASE_URL}/sample/user`);
  if (!response.ok) {
    throw new Error('프로필 데이터를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
};

export const getFolder = async () => {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error('폴더 데이터를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
};
