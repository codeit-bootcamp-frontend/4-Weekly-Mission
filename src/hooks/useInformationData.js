import { useState, useEffect } from 'react';
import { USER_URL } from '../constants/urls';
export function useInformationData({ url }) {
  const [myInfo, setMyInfo] = useState(0);

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
