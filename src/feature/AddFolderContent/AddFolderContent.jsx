import { Modal } from "feature/Modal/Modal";
import { ModalButtonBlue } from "feature/ModalElements/ModalButtonBlue";
import { ModalInput } from "feature/ModalElements/ModalInput";

export function AddFolderContent({ isOpenModal, handleModalClose }) {
  return (
    <Modal
      title="폴더 추가"
      isOpenModal={isOpenModal}
      handleModalClose={handleModalClose}
    >
      <ModalInput placeholder="내용 입력" type="text"></ModalInput>
      <ModalButtonBlue type="button">추가하기</ModalButtonBlue>
    </Modal>
  );
}
