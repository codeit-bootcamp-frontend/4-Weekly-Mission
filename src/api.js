const BASE_URL = 'https://bootcamp-api.codeit.kr/api';
export const SAMPLE_ID = '1';

export const getUser = async () => {
  const response = await fetch(`${BASE_URL}/sample/user`);
  if (!response.ok) {
    const errorResponse = await response.json();
    console.error(errorResponse);
    return { data: null, error: '프로필 데이터를 불러오는데 실패했습니다' };
  }
  const body = await response.json();
  return { data: body, error: null };
};

export const getFolder = async () => {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  if (!response.ok) {
    const errorResponse = await response.json();
    console.error(errorResponse);
    return { data: null, error: '폴더 데이터를 불러오는데 실패했습니다' };
  }
  const body = await response.json();
  return { data: body, error: null };
};

export const getFolderUser = async () => {
  const response = await fetch(`${BASE_URL}/users/${SAMPLE_ID}`);
  if (!response.ok) {
    const errorResponse = await response.json();
    console.error(errorResponse);
    return { data: null, error: '폴더 사용자 데이터를 불러오는데 실패했습니다' };
  }
  const body = await response.json();
  return { data: body.data[SAMPLE_ID - 1], error: null };
};

export const getFolderList = async () => {
  const response = await fetch(`${BASE_URL}/users/${SAMPLE_ID}/folders`);
  if (!response.ok) {
    const errorResponse = await response.json();
    console.error(errorResponse);
    return { data: null, error: '폴더 리스트를 불러오는데 실패했습니다' };
  }
  const body = await response.json();
  return { data: body.data, error: null };
};

export const getAllFolderLink = async () => {
  const response = await fetch(`${BASE_URL}/users/${SAMPLE_ID}/links`);
  if (!response.ok) {
    const errorResponse = await response.json();
    console.error(errorResponse);
    return { data: null, error: '전체 폴더 링크를 불러오는데 실패했습니다' };
  }
  const body = await response.json();
  return { data: body.data, error: null };
};
