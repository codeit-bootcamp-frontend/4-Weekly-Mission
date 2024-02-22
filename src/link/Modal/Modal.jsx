import React, { useState } from "react";
import "./Modal.css";
import DeleteModal from "./DeleteModal";

const Modal = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-text" onClick={() => setShowModal(true)}>
          삭제하기
        </div>
        {showModal && (
          <DeleteModal onClose={() => setShowModal(false)}>
            링크 삭제
          </DeleteModal>
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
