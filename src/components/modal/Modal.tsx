import '../../assets/styles/Modal.css';
import AddFolderModal from './AddFolderModal';
import RenameFolderModal from './RenameFolderModal';
import DeleteFolderModal from './DeleteFolderModal';
import DeleteLinkModal from './DeleteLinkModal';
import ShareFolderModal from './ShareFolderModal';
import AddLinkModal from './AddLinkModal';

interface ModalProps {
  action: string;
  closeModal: () => void;
  data?: any;
}

const Modal = ({ action, closeModal, data = {} }: ModalProps) => {
  const renderModal = () => {
    switch (action) {
      case 'add-link':
        return <AddLinkModal data={data} closeModal={closeModal} />;

      case 'add-folder':
        return <AddFolderModal closeModal={closeModal} />;

      case 'rename':
        return <RenameFolderModal closeModal={closeModal} />;

      case 'delete-folder':
        return <DeleteFolderModal data={data} closeModal={closeModal} />;

      case 'delete-link':
        return <DeleteLinkModal data={data} closeModal={closeModal} />;

      case 'share':
        return <ShareFolderModal data={data} closeModal={closeModal} />;

      default:
        return;
    }
  };

  return (
    <div className="modal">
      <div className="modal-box">{renderModal()}</div>
    </div>
  );
};

export default Modal;
