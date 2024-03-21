import { ModalButtonBlue } from "components/Modals/ModalElements/ModalButtonBlue";
import { ModalInput } from "components/Modals/ModalElements/ModalInput";
import { Modal } from "../Modal/Modal";

export function RenameModal({ isOpenModal, handleModalClose }) {
  return (
    <Modal
      title="폴더 이름 변경"
      isOpenModal={isOpenModal}
      handleModalClose={handleModalClose}
    >
      <ModalInput type="text"></ModalInput>
      <ModalButtonBlue type="button">변경하기</ModalButtonBlue>
    </Modal>
  );
}
