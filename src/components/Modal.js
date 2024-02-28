import '../styles/Modal.css';
import buttonClose from '../assets/icons/button-close.svg';
import ModalEdit from './ModalEdit';
import ModalDelete from './ModalDelete';
import ModalShare from './ModalShare';
import ModalAdd from './ModalAdd';

const Modal = ({ onClose, role, folderInfo = "", folderList }) => {
  const modalTitle = {
    "edit-name": "폴더 이름 변경", "edit-add": "폴더 추가", "share": "폴더 공유",
    "delete-folder": "폴더 삭제", "delete-link": "링크 삭제", "add": "폴더에 추가"
  };

  return (
    <>
      <div className="modal-mask" onClick={onClose}></div>
      <div className="modal-container" onClick={(event) => event.stopPropagation()}>
        <h2 className="modal-title">{modalTitle[role]}</h2>
        <a className="modal-button-close">
          <img src={buttonClose} onClick={onClose} alt='닫기' />
        </a>
        {role === "edit-name" && <ModalEdit />}
        {role === "edit-add" && <ModalEdit />}
        {role === "share" && <ModalShare subTitle={folderInfo?.name} />}
        {role === "delete-folder" && <ModalDelete subTitle={folderInfo?.name} />}
        {role === "delete-link" && <ModalDelete />}
        {role === "add" && <ModalAdd folderList={folderList} />}
      </div>
    </>
  );
}

export default Modal;