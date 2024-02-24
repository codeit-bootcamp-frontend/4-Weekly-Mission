import "./ModalEdit.css";

const ModalEdit = ({ setIsModalOpen, text, buttonText }) => {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="modal-bg"></div>
      <div className="modal-box">
        <button className="modal-close-btn" onClick={handleCloseModal}>
          <img src="images/close.svg" alt="" />
        </button>
        <div className="modal-items">
          <h2>{text}</h2>
          <div className="modal-content">
            <input
              className="modal-input"
              type="text"
              placeholder="내용 작성 중.."
            />
            <button className="modal-change-btn">{buttonText}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEdit;
