import ReactDom from "react-dom";
import * as S from "./ModalStyle";
import { AddModalButton } from "../Button/ButtonStyle";
import { CLOSE_BUTTON } from "../../../constnats/image";

const InputModal = ({ children, title, placeholder }) => {
  return ReactDom.createPortal(
    <S.Background>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Input placeholder={placeholder} />
        <AddModalButton>{children}</AddModalButton>
        <S.CloseButton src={CLOSE_BUTTON} alt="close" />
      </S.Container>
    </S.Background>,
    document.getElementById("modal")
  );
};

export default InputModal;
