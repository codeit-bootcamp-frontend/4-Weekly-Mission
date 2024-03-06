import { Modal } from "feature/Modals/Modal/Modal";
import "./DeleteFolder.css";
import { ModalButtonRed } from "feature/Modals/ModalElements/ModalButtonRed";

export function DeleteFolder({ isOpenModal, handleModalClose }) {
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
