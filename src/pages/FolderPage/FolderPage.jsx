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

export const ModalContext = createContext(null);

function FolderPage() {
  //modal type state
  const [modalType, setModalType] = useState('');
  //modal  open state
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [shareModalIsOpen, setShareModalIsOpen] = useState(false);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  //modal purpose state
  const [editModalPurpose, setEditModalPurpose] = useState('');
  const [deleteModalPurpose, setDeleteModalPurpose] = useState({});
  const [shareModalPurpose, setShareModalPurpose] = useState({});
  const [addModalPurpose, setAddModalPurpose] = useState('');
  //modal state handle functions

  //modal open
  const handleEditModalOpen = (purpose) => {
    setEditModalPurpose(purpose);
    setEditModalIsOpen(true);
  };

  const handleDeleteModalOpen = (purpose) => {
    setDeleteModalPurpose(purpose);
    setDeleteModalIsOpen(true);
  };

  const handleAddModalOpen = (purpose) => {
    setAddModalPurpose(purpose);
    setAddModalIsOpen(true);
  };
  const handleShareModalOpen = (purpose) => {
    setShareModalPurpose(purpose);
    setShareModalIsOpen(true);
  };

  //modal close
  const handleDeleteModalClose = () => {
    setDeleteModalIsOpen(false);
  };
  const handleEditModalClose = () => {
    setEditModalIsOpen(false);
  };

  const handleShareModalClose = () => {
    setShareModalIsOpen(false);
  };
  const handleAddModalClose = () => {
    setAddModalIsOpen(false);
  };

  //Folder Page
  return (
    <ModalContext.Provider
      value={{
        editModalIsOpen,
        addModalIsOpen,
        deleteModalIsOpen,
        shareModalIsOpen,
        editModalPurpose,
        deleteModalPurpose,
        addModalPurpose,
        shareModalPurpose,
        handleEditModalOpen,
        handleDeleteModalOpen,
        handleShareModalOpen,
        handleAddModalOpen,
        handleEditModalClose,
        handleDeleteModalClose,
        handleShareModalClose,
        handleAddModalClose,
      }}
    >
      {editModalIsOpen && <EditModal />}
      {deleteModalIsOpen && <DeleteModal />}
      {shareModalIsOpen && <ShareModal />}
      {addModalIsOpen && <AddModal />}
      <Header url={USER_URL} />
      <LinkAddBar />
      <FolderList />
      <Footer />
    </ModalContext.Provider>
  );
}
export default FolderPage;
