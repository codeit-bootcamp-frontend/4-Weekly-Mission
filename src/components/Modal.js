import '../styles/Modal.css';
import buttonClose from '../assets/icons/button-close.svg';
// import ModalEdit from './ModalEdit';
// import ModalDelete from './ModalDelete';
// import ModalShare from './ModalShare';
import ModalAdd from './ModalAdd';

const Modal = ({ onClose }) => {

  return (
    <>
      <div className="modal-mask" onClick={onClose}></div>
      <div className="modal-container" onClick={(event) => event.stopPropagation()}>
        <h2 className="modal-title">모달타이틀</h2>
        <a className="modal-button-close">
          <img src={buttonClose} onClick={onClose} alt='닫기' />
        </a>
        {/* <ModalDelete /> */}
        {/* <ModalEdit /> */}
        {/* <ModalShare /> */}
        <ModalAdd />
      </div>
    </>
  );
}

export default Modal;