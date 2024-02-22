import React from "react"
import * as S from "./Modal.style"
import { Button } from "./Button.style"

export function ModalWithInput(Component) {
  return (props) => {
    return (
      <React.Fragment>
        <Component {...props}>
          <S.Input type="text" />
        </Component>
      </React.Fragment>
    )
  }
}

function Modal({ children, title, onClick }) {
  return (
    <S.Modal>
      <S.ModalLayout>
        <S.ModalExit onClick={onClick}>X</S.ModalExit>
        <S.Title>{title}</S.Title>
        {children}
        <Button $bgColor="gradient">변경하기</Button>
      </S.ModalLayout>
    </S.Modal>
  )
}

// {/* X 버튼 */}
// {/* 제목 */}
// {/* 인풋, 일반 텍스트 */}
// {/* 버튼 */}

export default Modal
