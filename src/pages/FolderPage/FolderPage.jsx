import FolderList from '../../components/FolderList';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LinkAddBar from './components/LinkAddBar';
import { USER_URL } from '../../constants/urls';
import { useState, createContext } from 'react';
import EditModal from '../../components/modals/EditModal';
import DeleteModal from '../../components/modals/DeleteModal';

export const ModalContext = createContext(null);

function FolderPage() {
  //modal state
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const handleEditModalOpen = () => {
    setEditModalIsOpen(true);
  };
  const handleEditModalClose = () => {
    setEditModalIsOpen(false);
  };

  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const handleDeleteModalOpen = () => {
    setDeleteModalIsOpen(true);
  };
  const handleDeleteModalClose = () => {
    setDeleteModalIsOpen(false);
  };
  return (
    <ModalContext.Provider
      value={{
        editModalIsOpen,
        deleteModalIsOpen,
        handleEditModalOpen,
        handleDeleteModalOpen,
        handleEditModalClose,
        handleDeleteModalClose,
      }}
    >
      <EditModal />
      <DeleteModal />
      <Header url={USER_URL} />
      <LinkAddBar />
      <FolderList />
      <Footer />
    </ModalContext.Provider>
  );
}
export default FolderPage;
