import FolderList from '../../components/FolderList';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LinkAddBar from './components/LinkAddBar';
import { USER_URL } from '../../constants/urls';
import { useState, createContext } from 'react';
import EditModal from '../../components/modals/EditModal';
import DeleteModal from '../../components/modals/DeleteModal';
import ShareModal from '../../components/modals/ShareModal';
import AddModal from '../../components/modals/AddModal';
import {
  ADD_TYPE,
  DELETE_TYPE,
  EDIT_TYPE,
  SHARE_TYPE,
} from '../../constants/modalConstants';
import { ModalClose, ModalOpen } from '../../types/functionsType';

export const ModalContext = createContext(null);

function FolderPage() {
  //modal states
  const [modalType, setModalType] = useState('');
  const [modalPurpose, setModalPurpose] = useState();

  //modal open
  const handleModalOpen: ModalOpen = (type, purpose) => {
    setModalPurpose(purpose);
    setModalType(type);
  };

  //modal close
  const handleModalClose: ModalClose = () => {
    setModalType('');
  };

  //Folder Page
  return (
    <ModalContext.Provider
      value={{
        modalType,
        modalPurpose,
        handleModalOpen,
        handleModalClose,
      }}
    >
      {modalType === ADD_TYPE && <AddModal />}
      {modalType === DELETE_TYPE && <DeleteModal />}
      {modalType === EDIT_TYPE && <EditModal />}
      {modalType === SHARE_TYPE && <ShareModal />}

      <Header url={USER_URL} />
      <LinkAddBar />
      <FolderList />
      <Footer />
    </ModalContext.Provider>
  );
}
export default FolderPage;
