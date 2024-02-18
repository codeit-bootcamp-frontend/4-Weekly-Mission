import { useState, useEffect } from 'react';
import { getFolderData } from '../../apis/folder';
import Profile from '../../components/SharedPage/Profile/Profile';
import Card from '../../components/Card/Card';
import CardSearchbar from '../../components/common/SearchBar/CardSearchbar';
import FolderContainer from './sharedPageStyle';

const SharedPage = () => {
  const [profiles, setProfiles] = useState(null);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    getFolderData()
      .then(data => {
        setProfiles(data.folder);
        setCards(data.folder.links);
      })
      .catch(error => {
        alert('데이터를 불러오는데 실패했습니다.');
      });
  }, []);

  return (
    <>
      {profiles && <Profile {...profiles} />}
      <FolderContainer>
        <CardSearchbar />
        {cards && <Card links={cards} />}
      </FolderContainer>
    </>
  );
};

export default SharedPage;
