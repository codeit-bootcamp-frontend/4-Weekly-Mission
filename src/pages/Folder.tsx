import FolderNav from '../components/FolderPage/header/FolderNav/FolderNav';
import AddLink from '../components/FolderPage/header/AddLink/AddLink';
import Footer from '../components/footer/Footer';
import FolderPageMain from '../components/FolderPage/main/FolderPageMain/FolderPageMain';
import useModal from '../hooks/useModal';
import { useState } from 'react';
function Folder() {
  const userDataUrl = 'https://bootcamp-api.codeit.kr/api/users/1';
  const {
    isShowModal: isShowAddLinkInFolderModal,
    handleModalClick: handleAddLinkInFolderModalClick,
  } = useModal(false);

  const [sharedUrl, setSharedUrl] = useState('');

  return (
    <>
      <FolderNav userDataUrl={userDataUrl} />
      <AddLink
        handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
        setSharedUrl={setSharedUrl}
      />
      <FolderPageMain
        isShowAddLinkInFolderModal={isShowAddLinkInFolderModal}
        handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
        sharedUrl={sharedUrl}
        setSharedUrl={setSharedUrl}
      />
      <Footer />
    </>
  );
}

export default Folder;
