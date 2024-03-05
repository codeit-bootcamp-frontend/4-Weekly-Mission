import { Modal } from "../Modal/Modal";
import "./DeleteLink.css";
import { ModalButtonRed } from "feature/Modals/ModalElements/ModalButtonRed";

export function DeleteLink({ deleteURL, isOpenModal, handleModalClose }) {
  return (
    <Modal
      title="링크 삭제"
      isOpenModal={isOpenModal}
      handleModalClose={handleModalClose}
    >
      <p className="DeleteLinkModal-subTitle">{deleteURL}</p>
      <ModalButtonRed type="button">삭제하기</ModalButtonRed>
    </Modal>
  );
}
