import { useEffect, useState } from 'react';
import { getLastTime, formatDate } from '../utils/timeCalculater';
import noneImg from '../assets/noneImg.svg';
import { SharedPageLink } from '../types/interfaces/fetchDatas';

/*
  폴더 페이지(FolderList 컴포넌트)에서 
  링크 데이터를 가져오는 커스텀 훅

  url을 받아서 fetch 실행, 결과 추출해서 반환

  url을 useEffect의 dependency array에 설정해서
  상위컴포넌트에서 url이 바뀌면 리랜더링
 */

function useLinksData(url: string) {
  const [linksArray, setLinksArray] = useState<SharedPageLink[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setLinksArray(
          (result.data as any[]).map((link) => ({
            id: link.id,
            url: link.url,
            imgUrl: link.image_source || noneImg,
            title: link.title,
            description: link.description || 'No description',
            lastTimeString: getLastTime(link.created_at),
            uploadDate: formatDate(link.created_at),
          }))
        );
      } catch (error) {
        console.log('links data fetch error', error);
      }
    };
    getData();
  }, [url]);

  return linksArray;
}

export default useLinksData;
