const API_BASE_URL = 'https://bootcamp-api.codeit.kr';

export const getFolderData = async () => {
  const response = await fetch(`${API_BASE_URL}/api/sample/folder`);
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
};
