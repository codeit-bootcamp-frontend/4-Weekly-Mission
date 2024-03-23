import React from "react"
import * as S from "./Backdrop.style"

interface BackdropProps {
  onCloseModal: () => void
}

function Backdrop({ onCloseModal }: BackdropProps) {
  return <S.Backdrop onClick={onCloseModal}></S.Backdrop>
}

export default Backdrop
