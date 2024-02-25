import "./ModalDelete.css";
import closeBtn from "../../images/close.svg";

const ModalDelete = ({ setIsModalOpen }) => {
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
          <div className="modal-title">
            <h2>폴더 삭제</h2>
            <p>폴더명</p>
          </div>
          <div className="modal-content">
            <button className="modal-change-btn">삭제하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDelete;
