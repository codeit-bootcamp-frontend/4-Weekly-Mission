import FolderNav from '../components/header/FolderNav';
import AddLink from '../components/header/AddLink';
import Footer from '../components/footer/Footer';
import FolderPageMain from '../components/main/FolderPageMain';
import useModal from '../hooks/useModal';
import { useState } from 'react';
function Folder() {
  const userDataUrl = 'https://bootcamp-api.codeit.kr/api/users/2';
  const {
    isShowModal: isShowAddLinkInFolderModal,
    handleModalClick: handleAddLinkInFolderModalClick,
  } = useModal(false);

  const [sharedUrl, setSharedUrl] = useState('');

  return (
    <>
      <FolderNav
        userDataUrl={userDataUrl}
        sharedUrl={sharedUrl}
        setSharedUrl={setSharedUrl}
      />
      <AddLink
        handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
        sharedUrl={sharedUrl}
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
