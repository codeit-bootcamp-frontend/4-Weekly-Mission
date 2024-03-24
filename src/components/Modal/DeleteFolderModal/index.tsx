import { RefObject } from "react";
import { Modal } from "../Modal";
import "./DeleteFolderModal.css";

interface Props {
  folderName: string;
  openModal: boolean;
  handleModalClose: () => void;
  modalRef: RefObject<HTMLDivElement>;
}

export const DeleteFolderModal = ({
  folderName,
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
      <div className="deleteFolderModal">
        <div className="deleteFolderModal-top">폴더 삭제</div>
        <div className="deleteFolderModal-middle">{folderName}</div>
        <button className="deleteFolderModal-button">삭제하기</button>
      </div>
    </Modal>
  );
};
