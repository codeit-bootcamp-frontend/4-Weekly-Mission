import AddLinkModal from './AddLinkModal';
import AddFolderModal from './AddFolderModal';
import DeleteFolderModal from './DeleteFolderModal';
import DeleteLinkModal from './DeleteLinkModal';
import EditModal from './EditModal';
import ShareModal from './ShareModal';

export const ModalData = ({ selectModal, handleCloseModal }) => {
  switch (selectModal) {
    case 'AddLinkModal':
      return <AddLinkModal onClose={handleCloseModal} />;
    case 'AddFolderModal':
      return <AddFolderModal onClose={handleCloseModal} />;
    case 'DeleteFolderModal':
      return <DeleteFolderModal onClose={handleCloseModal} />;
    case 'DeleteLinkModal':
      return <DeleteLinkModal onClose={handleCloseModal} />;
    case 'EditModal':
      return <EditModal onClose={handleCloseModal} />;
    case 'ShareModal':
      return <ShareModal onClose={handleCloseModal} />;
    default:
      return null;
  }
};
