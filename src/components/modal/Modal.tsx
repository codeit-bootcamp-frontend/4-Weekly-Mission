import React, { ReactNode } from "react"
import * as S from "./Modal.style"
import ModalCloseIcon from "assets/images/icon/modal_close.svg"

interface ModalProps {
  children: ReactNode
  title: string
  onCloseModal: () => void
}

function Modal({ children, title, onCloseModal }: ModalProps) {
  return (
    <S.Modal>
      <S.ModalLayout>
        <S.ModalExit onClick={onCloseModal}>
          <img src={ModalCloseIcon} alt="모달 창 닫기" />
        </S.ModalExit>
        <S.Title>{title}</S.Title>
        {children}
      </S.ModalLayout>
    </S.Modal>
  )
}

export default Modal
