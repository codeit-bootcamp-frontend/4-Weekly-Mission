import ReactDom from "react-dom";
import * as S from "./ModalStyle";
import { DeleteModalButton } from "../Button/ButtonStyle";
import { CLOSE_BUTTON } from "../../../constnats/image";

const DeleteModal = ({ children, title, text, onClose }) => {
  return ReactDom.createPortal(
    <S.Background onClick={onClose}>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
        <DeleteModalButton>{children}</DeleteModalButton>
        <S.CloseButton src={CLOSE_BUTTON} alt="close" onClick={onClose} />
      </S.Container>
    </S.Background>,
    document.getElementById("modal")
  );
};

export default DeleteModal;
