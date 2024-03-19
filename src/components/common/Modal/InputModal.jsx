import ReactDom from "react-dom";
import * as S from "./ModalStyle";
import { AddModalButton } from "../Button/ButtonStyle";
import { CLOSE_BUTTON } from "../../../constnats/image";

const InputModal = ({ children, title, placeholder, onClose }) => {
  return ReactDom.createPortal(
    <S.Background onClose={onClose}>
      <S.Container
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <S.Title>{title}</S.Title>
        <S.Input placeholder={placeholder} />
        <AddModalButton>{children}</AddModalButton>
        <S.CloseButton src={CLOSE_BUTTON} alt="close" onClick={onClose} />
      </S.Container>
    </S.Background>,
    document.getElementById("modal")
  );
};

export default InputModal;
