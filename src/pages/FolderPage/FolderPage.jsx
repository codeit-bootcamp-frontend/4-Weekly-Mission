import React, { useEffect, useState } from 'react';
import LinkInput from '../../components/FolderPage/LinkInput/LinkInput';
import CardSearchbar from '../../components/common/SearchBar/CardSearchbar';
import { getLinkData, getLinkByIdData } from '../../apis/link';
import Card from '../../components/Card/Card';
import { getFolderData } from '../../apis/folder';
import FolderControls from '../../components/FolderPage/SortButtonGroup/FolderControls';

const FolderPage = () => {
  const [folders, setFolders] = useState(null);
  const [cards, setCards] = useState(null);
  const [selectedFolderId, setSelectedFolderId] = useState(null);

  useEffect(() => {
    getFolderData().then(res => {
      setFolders(res.data);
    });

    getLinkData().then(res => {
      setCards(res.data);
    });
  }, []);

  const handleFolderClick = async id => {
    setSelectedFolderId(id);

    if (id === null) {
      const res = await getLinkData();
      setCards(res.data);
      return;
    }

    const res = await getLinkByIdData(id);
    setCards(res.data);
  };
  return (
    <>
      <LinkInput />
      <CardSearchbar />
      {folders && (
        <FolderControls
          folders={folders}
          selectedFolderId={selectedFolderId}
          onClick={handleFolderClick}
        />
      )}
      {cards && <Card links={cards} />}
    </>
  );
};

export default FolderPage;
