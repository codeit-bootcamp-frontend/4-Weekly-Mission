import { useState, useEffect } from 'react';
import { FolderPageUser } from '../types/interfaces/fetchDatas';

export function useInformationData(url: string) {
  const [myInfo, setMyInfo] = useState<FolderPageUser[]>();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setMyInfo(result);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    getData();
  }, []);
  return myInfo;
}
export default useInformationData;
