import React from "react";
import "./Modal.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-text">{children}</div>
        <button className="closeButton" onClick={onClose}>
          ❌
        </button>
      </div>
    </div>
  );
};

export default Modal;

// id = "modal-root";
// showModal = { showModal };
// onClose = { handleCloseModal };
