import "./ModalEdit.css";
import closeBtn from "../../images/close.svg";
import { modalType } from "../../interfaces/folder.interface";

const ModalEdit = ({ closeModal, modalTitle, modalButtonName }: modalType) => {
  return (
    <>
      <div className="modal-bg" />
      <div className="modal-box">
        <button
          className="modal-close-btn"
          onClick={() => {
            closeModal();
          }}
        >
          <img src={closeBtn} alt="" />
        </button>
        <div className="modal-items">
          <h2>{modalTitle}</h2>
          <div className="modal-content">
            <input
              className="modal-input"
              type="text"
              placeholder="내용 입력"
            />
            <button className="modal-change-btn">{modalButtonName}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEdit;
