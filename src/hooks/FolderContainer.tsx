import { useState, useEffect } from 'react';

export function useFetchFolders() {
  const [folders, setFolders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://bootcamp-api.codeit.kr/api/users/1/folders')
      .then((response) => {
        if (!response.ok) {
          throw new Error('response 전달 실패');
        }
        return response.json();
      })
      .then((data) => {
        setFolders(data.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return { folders, error };
}
