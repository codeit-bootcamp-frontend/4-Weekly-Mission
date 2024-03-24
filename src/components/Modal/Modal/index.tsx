import { ReactNode, RefObject } from "react";
import { IoClose } from "react-icons/io5";
import "./Modal.css";
import { Fragment } from "react";

interface Props {
  children: ReactNode;
  openModal: boolean;
  handleModalClose: () => void;
  modalRef: RefObject<HTMLDivElement>;
}

export const Modal = ({
  openModal,
  children,
  handleModalClose,
  modalRef,
}: Props) => {
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
