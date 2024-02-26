import { useState, useEffect } from 'react';

const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

function useFetchFolderCardsData(folderId) {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (folderId === 0) {
        try {
          const response = await fetch(`${BASE_URL}/users/11/links`);
          if (!response.ok) {
            throw new Error('response 전달 실패');
          }
          const data = await response.json();
          setCardsData(data.data);
        } catch (error) {
          console.error('Fetch FolderCardsData에서 에러 발생:', error);
          return null;
        }
      } else {
        try {
          const response = await fetch(
            `${BASE_URL}/users/11/links?folderId=${folderId}`
          );
          if (!response.ok) {
            throw new Error('response 전달 실패');
          }
          const data = await response.json();
          setCardsData(data.data);
        } catch (error) {
          console.error('에러 발생:', error);
          return null;
        }
      }
    };
    fetchData();
  }, [folderId]);

  return cardsData;
}

export default useFetchFolderCardsData;
