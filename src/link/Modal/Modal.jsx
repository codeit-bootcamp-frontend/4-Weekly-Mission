import React, { useState } from "react";
import "./Modal.css";
import DeleteModal from "./DeleteModal";

const Modal = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-text" onClick={handleOpenModal}>
          삭제하기
        </div>
        {showModal && (
          <DeleteModal onClose={handleCloseModal}>링크 삭제</DeleteModal>
        )}
        <div className="modal-text">폴더에 추가</div>
        <button className="modal-text closeButton" onClick={onClose}>
          ❌
        </button>
      </div>
    </div>
  );
};

export default Modal;
