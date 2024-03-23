import Modal from "./BaseModal";
import { AddModalButton } from "../Button/ButtonStyle";
import { CLOSE_BUTTON } from "constnats/image";
import { BaseModal } from "constnats/types";
import * as S from "./ModalStyle";

interface Input extends BaseModal {
  placeholder: string;
}

const InputModal = ({ children, title, placeholder, onClose }: Input) => {
  return (
    <Modal title={title}>
      <>
        <S.Input placeholder={placeholder} />
        <AddModalButton>{children}</AddModalButton>
        <S.CloseButton src={CLOSE_BUTTON} alt="close" onClick={onClose} />
      </>
    </Modal>
  );
};

export default InputModal;
