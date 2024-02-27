import { Modal } from "../Modal";
import "./DeleteFolderModal.css";

export const DeleteFolderModal = ({
  folderName,
  openModal,
  handleModalClose,
  modalRef,
}) => {
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
