import { RefObject } from "react";
import { Modal } from "../Modal";
import "./EditFolderNameModal.css";

interface Props {
  openModal: boolean;
  handleModalClose: () => void;
  modalRef: RefObject<HTMLDivElement>;
}

export const EditFolderNameModal = ({
  openModal,
  handleModalClose,
  modalRef,
}: Props) => {
  return (
    <Modal
      openModal={openModal}
      handleModalClose={handleModalClose}
      modalRef={modalRef}
    >
      <div className="editFolderNameModal">
        <div className="editFolderNameModal-top">폴더 이름 변경</div>
        <input
          className="editFolderNameModal-input"
          type="text"
          placeholder="유용한 팁"
        />
        <button className="editFolderNameModal-button">변경하기</button>
      </div>
    </Modal>
  );
};
