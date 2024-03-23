import Modal from "./BaseModal";
import { DeleteModalButton } from "../Button/ButtonStyle";
import { CLOSE_BUTTON } from "constnats/image";
import { BaseModal } from "constnats/types";
import * as S from "./ModalStyle";

interface Delete extends BaseModal {
  text: string;
}

const DeleteModal = ({ children, title, text, onClose }: Delete) => {
  return (
    <Modal title={title}>
      <>
        <S.Text>{text}</S.Text>
        <DeleteModalButton>{children}</DeleteModalButton>
        <S.CloseButton src={CLOSE_BUTTON} alt="close" onClick={onClose} />
      </>
    </Modal>
  );
};

export default DeleteModal;
