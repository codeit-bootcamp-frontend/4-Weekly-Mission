import folderContext from '@/src/context/folderContext';
import { useContext } from 'react';
import AddFolderModal from './AddFolderModal/AddFolderModal';
import AddLinkModal from './AddLinkModal/AddLinkModal';
import EditFolderModal from './EditFolderModal/EditFolderModal';
import SharingModal from './SharingModal/SharingModal';

const ModalContent = () => {
  const { modalData } = useContext(folderContext);
  if (modalData?.modalType === 'AddFolderModal') {
    return <AddFolderModal />;
  }
  if (modalData?.modalType === 'AddLinkModal') {
    return <AddLinkModal />;
  }
  if (modalData?.modalType === 'EditFolderModal') {
    return <EditFolderModal />;
  }
  if (modalData?.modalType === 'SharingModal') {
    return <SharingModal />;
  }
  return null;
};

export default ModalContent;
