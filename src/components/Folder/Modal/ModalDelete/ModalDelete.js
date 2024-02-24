import "./ModalDelete.css";

const ModalDelete = ({ setIsDeleteModalOpen, text, buttonText }) => {
  const handleCloseModal = (e) => {
    e.preventDefault();
    setIsDeleteModalOpen(false);
  };
  return (
    <>
      <div className="modal-bg">
        <div className="modal-box">
          <button className="modal-close-btn" onClick={handleCloseModal}>
            <img src="images/close.svg" alt="" />
          </button>
          <div className="modal-items">
            <div className="modal-title">
              <h2>{text}</h2>
              <p>폴더명</p>
            </div>
            <div className="modal-content">
              <button className="modal-delete-btn">{buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDelete;
