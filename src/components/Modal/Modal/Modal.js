import { IoClose } from "react-icons/io5";
import "./Modal.css";
import { Fragment } from "react";

export const Modal = ({ openModal, children, handleModalClose, modalRef }) => {
  return (
    <Fragment>
      <div className="modal-overlay"></div>
      <div ref={modalRef} className={openModal ? "modal open" : "modal"}>
        <div onClick={handleModalClose}>
          <IoClose className="modal-closeBtn" />
        </div>
        {children}
      </div>
    </Fragment>
  );
};
