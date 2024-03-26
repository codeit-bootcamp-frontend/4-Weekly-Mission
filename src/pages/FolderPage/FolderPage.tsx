import { useState, createContext, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import FolderList from '../../components/FolderList';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LinkAddBar from './components/LinkAddBar';
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
import { USER_URL } from '../../constants/urls';
import { ModalClose, ModalOpen } from '../../types/functionsType';

export const ModalContext = createContext<{
  modalType: string;
  modalPurpose: any;
  handleModalOpen: ModalOpen;
  handleModalClose: ModalClose;
} | null>(null);

function FolderPage() {
  //modal states
  const [modalType, setModalType] = useState('');
  const [modalPurpose, setModalPurpose] = useState();
  const [linkAddBarRef, isLinkAddBarInView] = useInView();
  const [footerRef, isFooterInView] = useInView();
  const fixedLinkSearchBarRef = useRef<any>();

  //modal open
  const handleModalOpen: ModalOpen = (type, purpose) => {
    setModalPurpose(purpose);
    setModalType(type);
  };

  //modal close
  const handleModalClose: ModalClose = () => {
    setModalType('');
  };

  useEffect(() => {
    if (!isLinkAddBarInView && !isFooterInView) {
      fixedLinkSearchBarRef.current.style.setProperty('display', 'block');
      fixedLinkSearchBarRef.current.style.setProperty('position', 'fixed');
      fixedLinkSearchBarRef.current.style.setProperty('bottom', '0');
      fixedLinkSearchBarRef.current.style.setProperty('left', '0');
      fixedLinkSearchBarRef.current.style.setProperty('width', '100%');
      fixedLinkSearchBarRef.current.style.setProperty('z-index', '200');
    } else {
      fixedLinkSearchBarRef.current.style.setProperty('display', 'none');
    }
  }, [isLinkAddBarInView, isFooterInView]);

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
      <div ref={linkAddBarRef}>
        <LinkAddBar />
      </div>
      <div ref={fixedLinkSearchBarRef}>
        <LinkAddBar />
      </div>

      <FolderList />
      <div ref={footerRef}>
        <Footer />
      </div>
    </ModalContext.Provider>
  );
}
export default FolderPage;
