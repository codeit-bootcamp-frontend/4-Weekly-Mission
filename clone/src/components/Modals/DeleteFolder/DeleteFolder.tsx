import { Modal } from "components/Modals/Modal/Modal";
import "./DeleteFolder.css";
import { ModalButtonRed } from "components/Modals/ModalElements/ModalButtonRed";

export function DeleteFolder({ isOpenModal, handleModalClose, selectFolder }) {
  return (
    <Modal
      title="폴더 삭제"
      isOpenModal={isOpenModal}
      handleModalClose={handleModalClose}
    >
      <p className="DeleteFolderModal-subTitle">{selectFolder}</p>
      <ModalButtonRed>삭제하기</ModalButtonRed>
    </Modal>
  );
}
