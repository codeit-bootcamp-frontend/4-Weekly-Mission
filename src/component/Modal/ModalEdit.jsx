import "./ModalEdit.css";
import closeBtn from "../../images/close.svg";

const ModalEdit = ({ setIsModalOpen, modalTitle, modalButtonName }) => {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="modal-bg"></div>
      <div className="modal-box">
        <button className="modal-close-btn" onClick={handleCloseModal}>
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
