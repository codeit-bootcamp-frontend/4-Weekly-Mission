const API_BASE_URL = 'https://bootcamp-api.codeit.kr';

export const getUserProfile = async () => {
  const response = await fetch(`${API_BASE_URL}/api/sample/user`);
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
};
