import { Modal } from "feature/Modal/Modal";
import "./DeleteFolderModal.css";
import { ModalButtonRed } from "feature/ModalElements/ModalButtonRed";

export function DeleteFolderContent({ isOpenModal, handleModalClose }) {
  return (
    <Modal
      title="폴더 삭제"
      isOpenModal={isOpenModal}
      handleModalClose={handleModalClose}
    >
      <p className="DeleteFolderModal-subTitle">폴더명</p>
      <ModalButtonRed>삭제하기</ModalButtonRed>
    </Modal>
  );
}
