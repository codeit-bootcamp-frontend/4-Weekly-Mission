import { useEffect, useState } from 'react';

/*
폴더 데이터를 가져오는 커스텀 훅 입니다.

'전체' 폴더가 없어서 {id: 1,name:'전체'} 데이터를 추가해서 반환.

*/

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
