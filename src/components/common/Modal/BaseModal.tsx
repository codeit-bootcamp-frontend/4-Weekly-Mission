import { useEffect } from "react";
import ReactDom from "react-dom";
import { allowScroll, preventScroll } from "utils/scroll";
import { BaseModal } from "constants/types";
import * as S from "./ModalStyle";

const Modal = ({ children, title, onClose }: BaseModal) => {
  useEffect(() => {
    return () => {
      allowScroll(preventScroll());
    };
  }, []);

  return ReactDom.createPortal(
    <S.Background onClick={onClose}>
      <S.Container
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <S.Title>{title}</S.Title>
        {children}
      </S.Container>
    </S.Background>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
