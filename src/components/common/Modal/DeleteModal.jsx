import ReactDom from "react-dom";
import * as S from "./ModalStyle";
import { DeleteModalButton } from "../Button/ButtonStyle";
import { CLOSE_BUTTON } from "../../../constnats/image";

const DeleteModal = ({ children, title, text }) => {
  return ReactDom.createPortal(
    <S.Background>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
        <DeleteModalButton>{children}</DeleteModalButton>
        <S.CloseButton src={CLOSE_BUTTON} alt="close" />
      </S.Container>
    </S.Background>,
    document.getElementById("modal")
  );
};

export default DeleteModal;
