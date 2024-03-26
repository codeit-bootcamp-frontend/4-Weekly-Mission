import { useState, useEffect } from 'react';

function useFetchFolderCategoryData() {
  const [folderData, setFolderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://bootcamp-api.codeit.kr/api/users/11/folders'
        );
        if (!response.ok) {
          throw new Error('response 전달 실패');
        }
        const { data } = await response.json();
        setFolderData(data);
      } catch (error) {
        console.error('에러 발생:', error);
      }
    };
    fetchData();
  }, []);

  return folderData;
}

export default useFetchFolderCategoryData;
