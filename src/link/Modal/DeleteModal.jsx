import React from "react";
import "./DeleteModal.css";

const DeleteModal = ({ children, onClose }) => {
  return (
    <div className="modal_delete_back">
      <div className="modal_delete_box">
        <button className="modal_delete_closeButton" onClick={onClose}>
          ❌
        </button>
        <div className="modal_delete_child">{children}</div>
      </div>
    </div>
  );
};

export default DeleteModal;
