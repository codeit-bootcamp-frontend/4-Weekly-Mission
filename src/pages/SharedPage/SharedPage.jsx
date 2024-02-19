import { useEffect } from 'react';
import useGetApi from '../../hooks/useGetApi';
import { getSampleFolderData } from '../../apis/folder';
import Profile from '../../components/SharedPage/Profile/Profile';
import Card from '../../components/Card/Card';
import CardSearchbar from '../../components/common/SearchBar/CardSearchbar';
import FolderContainer from './sharedPageStyle';
import ErrorMessageModal from '../../components/common/Modal/ErrorMessageModal';
import useErrorMessageModal from '../../hooks/useErrorMessageModal';

const SharedPage = () => {
  const { data, error, resetError } = useGetApi(getSampleFolderData, {
    folder: null,
  });

  const { isModalOpen, errorMessage, showErrorModal, hideErrorModal } =
    useErrorMessageModal();

  const profiles = data?.folder;
  const cards = data?.folder?.links;

  useEffect(() => {
    if (error) {
      showErrorModal(error.message);
    }
  }, [error, showErrorModal]);

  const handleCloseModal = () => {
    hideErrorModal();
    resetError();
  };

  return (
    <>
      {isModalOpen && (
        <ErrorMessageModal message={errorMessage} onClose={handleCloseModal} />
      )}
      {profiles && <Profile {...profiles} />}
      <FolderContainer>
        <CardSearchbar />
        {cards && <Card links={cards} />}
      </FolderContainer>
    </>
  );
};

export default SharedPage;
