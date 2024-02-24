import React from "react";
import ModalPortal from "./Portal";
import ModalClose from "../../image/modal-close.svg";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalPortal>
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
          <button className="modal-close-button" onClick={onClose}>
            <img src={ModalClose} alt="close modal button" />
          </button>
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
