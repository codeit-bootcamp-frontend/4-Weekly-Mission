import { useEffect, useState } from 'react';

function useFoldersData(url) {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setFolders([{ id: 1, name: '전체', isclicked: null }, ...result.data]);
      } catch (error) {
        console.log('folder data fetch error', error);
      }
    };
    getData();
  }, []);

  return folders;
}

export default useFoldersData;
