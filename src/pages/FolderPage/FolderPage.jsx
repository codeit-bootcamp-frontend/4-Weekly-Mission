import React, { useEffect, useState } from 'react';
import LinkInput from '../../components/FolderPage/LinkInput/LinkInput';
import CardSearchbar from '../../components/common/SearchBar/CardSearchbar';
import { getLinkData, getLinkByIdData } from '../../apis/link';
import Card from '../../components/Card/Card';
import { getFolderData } from '../../apis/folder';
import FolderControls from '../../components/FolderPage/SortButtonGroup/FolderControls';
import useErrorMessageModal from '../../hooks/useErrorMessageModal';
import ErrorMessageModal from '../../components/common/Modal/ErrorMessageModal';

const FolderPage = () => {
  const [folders, setFolders] = useState(null);
  const [cards, setCards] = useState(null);
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const { isModalOpen, errorMessage, showErrorModal, hideErrorModal } =
    useErrorMessageModal();

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await getFolderData();
        setFolders(response.data);
      } catch (error) {
        showErrorModal(error.message);
      }
    };

    fetchFolders();
  }, [showErrorModal]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response =
          selectedFolderId === null
            ? await getLinkData()
            : await getLinkByIdData(selectedFolderId);
        setCards(response.data);
      } catch (error) {
        showErrorModal(error.message);
      }
    };

    fetchLinks();
  }, [selectedFolderId, showErrorModal]);

  const handleFolderClick = id => {
    setSelectedFolderId(id);
  };

  return (
    <>
      {isModalOpen && (
        <ErrorMessageModal message={errorMessage} onClose={hideErrorModal} />
      )}

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
