import FolderDeleteModal from './DeleteFolderModal';
import LinkDeleteModal from './DeleteLinkModal';
import EditModal from './EditModal';
import FolderAddModal from './FolderAddModal';
import LinkAddModal from './LinkAddModal';
import ShareModal from './ShareModal';
import modalClose from '../../assets/modalClose.svg';
import style from '../../styles/modal/Modal.module.css';

function Modal({ type, onClose, data }) {
  let modalComponent = '';
  switch (type) {
    case 'LinkDelete':
      modalComponent = <LinkDeleteModal data={data} />;
      break;
    case 'FolderDelete':
      modalComponent = <FolderDeleteModal data={data} />;
      break;
    case 'Edit':
      modalComponent = <EditModal />;
      break;
    case 'FolderAdd':
      modalComponent = <FolderAddModal data={data} />;
      break;
    case 'LinkAdd':
      modalComponent = <LinkAddModal data={data} />;
      break;
    case 'Share':
      modalComponent = <ShareModal data={data} />;
      break;
    default:
      modalComponent = '';
      break;
  }
  return (
    <>
      <div className={style.modalWrap}>
        <div className={style.modalHeader}>
          <img src={modalClose} alt="close" onClick={onClose} />
        </div>
        <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
          {modalComponent}
        </div>
      </div>
      <div className={style.backDropShadow} onClick={onClose}></div>
    </>
  );
}

export default Modal;
