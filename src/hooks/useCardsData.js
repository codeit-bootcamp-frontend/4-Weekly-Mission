import { useState } from 'react';
import { formatDate, getLastTime } from '../utils/timeCalculater';
import { useEffect } from 'react';
import { CARDS, PROFILE } from '../constants/fetchConstants';
function useCardsData(section, url) {
  const [owner, setOwner] = useState({
    ownerImg: '',
    ownerName: '',
    folderName: '',
  });
  const [linksArray, setLinksArray] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        const folder = result.folder;
        setOwner({
          ownerImg: folder.owner.profileImageSource,
          ownerName: folder.owner.name,
          folderName: folder.name,
        });
        setLinksArray(
          folder.links.map((link) => ({
            id: link.id,
            url: link.url,
            imgUrl: link.imageSource,
            title: link.title,
            description: link.description,
            lastTimeString: getLastTime(link.createdAt),
            uploadDate: formatDate(link.createdAt),
          }))
        );
      } catch (e) {
        console.log('폴더 데이터 GET 오류', e);
      }
    };
    getData();
  }, []);

  if (section === PROFILE) {
    return owner;
  } else if (section === CARDS) {
    return linksArray;
  }
}
export default useCardsData;
