import FolderList from '../../components/FolderList';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LinkAddBar from './components/LinkAddBar';
import { USER_URL } from '../../constants/urls';
import { useState, createContext, useEffect } from 'react';
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
import { useInView } from 'react-intersection-observer';
import $ from 'jquery';

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
      $('.fixed-linkAddBar').css('display', 'block');
      $('.fixed-linkAddBar').css('position', 'fixed');
      $('.fixed-linkAddBar').css('bottom', '0');
      $('.fixed-linkAddBar').css('left', '0');
      $('.fixed-linkAddBar').css('width', '100%');
      $('.fixed-linkAddBar').css('z-index', '200');
    } else {
      $('.fixed-linkAddBar').css('display', 'none');
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
      <div className="fixed-linkAddBar">
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
