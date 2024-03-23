import { useState, useEffect } from 'react';

export function useInformationData(url: string) {
  const [myInfo, setMyInfo] = useState<any>();

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
