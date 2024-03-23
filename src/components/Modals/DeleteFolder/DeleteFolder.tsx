import { Modal } from "../Modal/Modal";
import "./DeleteFolder.css";
import { ModalButtonRed } from "../ModalElements/ModalButtonRed";
import { DeleteFolderProps } from "../../../interface/ModalProp";

export function DeleteFolder({
  isOpenModal,
  handleModalClose,
  selectFolder,
}: DeleteFolderProps) {
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
