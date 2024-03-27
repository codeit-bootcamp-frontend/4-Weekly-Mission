import "./ModalDelete.css";
import closeBtn from "../../images/close.svg";
import { modalType } from "../../interfaces/folder.interface";
const ModalDelete = ({
  closeModal,
  modalTitle,
  modalButtonName,
}: modalType) => {
  return (
    <>
      <div className="modal-bg" />
      <div className="modal-box">
        <button className="modal-close-btn" onClick={() => closeModal()}>
          <img src={closeBtn} alt="" />
        </button>
        <div className="modal-items">
          <div className="modal-title">
            <h2>{modalTitle}</h2>
            <p>폴더명</p>
          </div>
          <div className="modal-content">
            <button className="modal-delete-btn">{modalButtonName}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDelete;
