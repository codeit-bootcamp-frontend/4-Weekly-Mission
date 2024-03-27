import Modal from "../Modal";
import { ModalButtonBlue } from "../ModalElements/ModalButtonBlue";
import { ModalInput } from "../ModalElements/ModalInput";
import { BaseModalProps } from "../ModalProp";

export function RenameModal({ isOpenModal, handleModalClose }: BaseModalProps) {
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
