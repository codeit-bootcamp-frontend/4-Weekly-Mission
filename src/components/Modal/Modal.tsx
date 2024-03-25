import React, { ReactNode } from "react";
import ModalPortal from "./Portal";
import ModalClose from "../../image/modal-close.svg";
import "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  selectedName?: string;
}

//모달창, 삭제버튼
const Modal = ({ isOpen, onClose, children }: ModalProps) => {
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
