import ReactDom from "react-dom";
import * as S from "./ModalStyle";
import { AddModalButton } from "../Button/ButtonStyle";
import { CLOSE_BUTTON } from "../../../constnats/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  placeholder: string;
  onClose?: () => void;
}

const InputModal = ({ children, title, placeholder, onClose }: Props) => {
  return ReactDom.createPortal(
    <S.Background onClick={onClose}>
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
    document.getElementById("modal") as HTMLElement
  );
};

export default InputModal;
