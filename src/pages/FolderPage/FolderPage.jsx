import FolderList from '../../components/FolderList';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LinkAddBar from './components/LinkAddBar';
import { USER_URL } from '../../constants/urls';
import { useState, createContext } from 'react';
import EditModal from '../../components/modals/EditModal';

export const ModalContext = createContext(null);

function FolderPage() {
  //modal state
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const handleModalOpen = () => {
    setEditModalIsOpen(true);
  };
  const handleModalClose = () => {
    setEditModalIsOpen(false);
  };
  return (
    <ModalContext.Provider
      value={{ editModalIsOpen, handleModalOpen, handleModalClose }}
    >
      <EditModal />
      <Header url={USER_URL} />
      <LinkAddBar />
      <FolderList />
      <Footer />
    </ModalContext.Provider>
  );
}
export default FolderPage;
