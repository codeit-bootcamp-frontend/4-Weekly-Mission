import FolderList from '../../components/FolderList';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LinkAddBar from './components/LinkAddBar';
import { USER_URL } from '../../constants/urls';
import { useState, createContext } from 'react';
import EditModal from '../../components/modals/EditModal';
import DeleteModal from '../../components/modals/DeleteModal';
import ShareModal from '../../components/modals/ShareModal';

export const ModalContext = createContext(null);

function FolderPage() {
  //modal  open state
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [shareModalIsOpen, setShareModalIsOpen] = useState(false);
  //modal purpose state
  const [editModalPurpose, setEditModalPurpose] = useState('');
  const [deleteModalPurpose, setDeleteModalPurpose] = useState({});
  const [shareModalPurpose, setShareModalPurpose] = useState({});

  //modal state handle functions
  const handleEditModalOpen = (purpose) => {
    setEditModalPurpose(purpose);
    setEditModalIsOpen(true);
  };
  const handleEditModalClose = () => {
    setEditModalIsOpen(false);
  };

  const handleDeleteModalOpen = (purpose) => {
    setDeleteModalPurpose(purpose);
    setDeleteModalIsOpen(true);
  };
  const handleDeleteModalClose = () => {
    setDeleteModalIsOpen(false);
  };
  const handleShareModalOpen = (purpose) => {
    setShareModalPurpose(purpose);
    setShareModalIsOpen(true);
  };
  const handleShareModalClose = () => {
    setShareModalIsOpen(false);
  };

  //Folder Page
  return (
    <ModalContext.Provider
      value={{
        editModalIsOpen,
        deleteModalIsOpen,
        editModalPurpose,
        deleteModalPurpose,
        shareModalIsOpen,
        shareModalPurpose,
        handleEditModalOpen,
        handleDeleteModalOpen,
        handleEditModalClose,
        handleDeleteModalClose,
        handleShareModalClose,
        handleShareModalOpen,
      }}
    >
      {editModalIsOpen && <EditModal />}
      {deleteModalIsOpen && <DeleteModal />}
      {shareModalIsOpen && <ShareModal />}
      <Header url={USER_URL} />
      <LinkAddBar />
      <FolderList />
      <Footer />
    </ModalContext.Provider>
  );
}
export default FolderPage;
