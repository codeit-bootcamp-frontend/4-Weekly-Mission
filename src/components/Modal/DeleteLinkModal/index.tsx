import { RefObject, MouseEvent } from "react";
import { Modal } from "../Modal";
import "./DeleteLinkModal.css";

interface Props {
  linkUrl: string;
  openModal: boolean;
  handleModalClose: () => void;
  modalRef: RefObject<HTMLDivElement>;
  handlePreventLinkClick: (e: MouseEvent) => void;
}

export const DeleteLinkModal = ({
  linkUrl,
  openModal,
  handleModalClose,
  modalRef,
  handlePreventLinkClick,
}: Props) => {
  return (
    <div onClick={handlePreventLinkClick}>
      <Modal
        openModal={openModal}
        handleModalClose={handleModalClose}
        modalRef={modalRef}
      >
        <div className="deleteLinkModal">
          <div className="deleteLinkModal-top">링크 삭제</div>
          <div className="deleteLinkModal-middle">{linkUrl}</div>
          <button className="deleteLinkModal-button">삭제하기</button>
        </div>
      </Modal>
    </div>
  );
};
