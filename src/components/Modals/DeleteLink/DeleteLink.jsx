import { Modal } from "../Modal/Modal";
import { ModalButtonRed } from "components/Modals/ModalElements/ModalButtonRed";
import * as S from "./DeleteLinkStyled";

export function DeleteLink({ deleteURL, isOpenModal, handleModalClose }) {
  return (
    <Modal
      title="링크 삭제"
      isOpenModal={isOpenModal}
      handleModalClose={handleModalClose}
    >
      <S.DeleteLinkURL>{deleteURL}</S.DeleteLinkURL>
      <ModalButtonRed type="button">삭제하기</ModalButtonRed>
    </Modal>
  );
}
