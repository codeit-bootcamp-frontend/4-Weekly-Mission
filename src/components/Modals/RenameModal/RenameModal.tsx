import { ModalButtonBlue } from "../ModalElements/ModalButtonBlue";
import { ModalInput } from "../ModalElements/ModalInput";
import { Modal } from "../Modal/Modal";
import { BaseModalProps } from "../../../interface/ModalProp";

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
