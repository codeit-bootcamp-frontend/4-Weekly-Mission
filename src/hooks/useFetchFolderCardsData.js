const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

const fetchFolderCardsData = async (folderId) => {
  if (folderId === '0') {
    try {
      const response = await fetch(`${BASE_URL}/users/4/links`);
      if (!response.ok) {
        throw new Error('response 전달 실패');
      }
      return response.data.json();
    } catch (error) {
      console.error('에러 발생:', error);
      return null;
    }
  } else {
    try {
      const response = await fetch(
        `${BASE_URL}/users/4/links?folderId=${folderId}`
      );
      if (!response.ok) {
        throw new Error('response 전달 실패');
      }
      return response.data.json();
    } catch (error) {
      console.error('에러 발생:', error);
      return null;
    }
  }
};

export default fetchFolderCardsData;
