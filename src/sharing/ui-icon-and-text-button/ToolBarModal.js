import React from "react";
import "./ToolBarModal.css";

const ToolBarModal = ({ children, onClose }) => {
  return (
    <div className="modal_back">
      <div className="modal-box">
        <button className="modal-closeButton" onClick={onClose}>
          ❌
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ToolBarModal;
