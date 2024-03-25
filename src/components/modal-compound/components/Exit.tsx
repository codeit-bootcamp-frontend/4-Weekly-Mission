// import ModalCloseIcon from "assets/images/icon/modal_close.svg"
import ModalCloseIcon from "assets/images/icon/modal_close.svg"
import { useContext } from "react"
import styled from "styled-components"
import { ModalContext } from "../context/ModalContext"


export default function Exit() {
  const { onCloseModal } = useContext(ModalContext)
  
  return (
    <ModalExit onClick={onCloseModal}>
      <img src={ModalCloseIcon} alt="모달 창 닫기" />
    </ModalExit>
  )
}

export const ModalExit = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
`