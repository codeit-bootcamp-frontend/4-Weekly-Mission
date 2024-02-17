import { useEffect, useState } from 'react';
import { getLastTime, formatDate } from '../utils/timeCalculater';
import noneImg from '../assets/noneImg.svg';
function useLinksData(url) {
  const [linksArray, setLinksArray] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setLinksArray(
          result.data.map((link) => ({
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
  }, []);

  return linksArray;
}

export default useLinksData;
