import React, { MouseEvent } from "react";
import "./ModalDelete.css";

interface ModalDeleteProps {
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  buttonText: string;
}

const ModalDelete = ({
  setIsDeleteModalOpen,
  text,
  buttonText,
}: ModalDeleteProps) => {
  const handleCloseModal = (e: MouseEvent) => {
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
