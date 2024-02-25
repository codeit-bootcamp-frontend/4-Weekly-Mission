import "./ModalEdit.css";
import closeBtn from "../../images/close.svg";

const ModalEdit = ({ setIsModalOpen }) => {
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
          <h2>폴더 이름 변경</h2>
          <div className="modal-content">
            <input
              className="modal-input"
              type="text"
              placeholder="내용 작성 중.."
            />
            <button className="modal-change-btn">변경하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEdit;
