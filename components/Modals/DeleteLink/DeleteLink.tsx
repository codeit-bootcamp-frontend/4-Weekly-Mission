import { Modal } from "../Modal/Modal";
import { ModalButtonRed } from "../ModalElements/ModalButtonRed";
import * as S from "./DeleteLinkStyled";
import { DeleteLinkProps } from "../ModalProp";

export default function DeleteLink({
  deleteURL,
  isOpenModal,
  handleModalClose,
}: DeleteLinkProps) {
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
