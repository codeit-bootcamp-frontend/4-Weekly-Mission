import { Modal } from "../Modal/Modal";
import { ModalButtonRed } from "feature/Modals/ModalElements/ModalButtonRed";
import { DeleteModalURL } from "./DeleteLinkStyled";

export function DeleteLink({ deleteURL, isOpenModal, handleModalClose }) {
  return (
    <Modal
      title="링크 삭제"
      isOpenModal={isOpenModal}
      handleModalClose={handleModalClose}
    >
      <DeleteModalURL>{deleteURL}</DeleteModalURL>
      <ModalButtonRed type="button">삭제하기</ModalButtonRed>
    </Modal>
  );
}
