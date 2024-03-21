import React from "react"
import * as S from "./Backdrop.style"

function Backdrop({ onCloseModal }) {
  return <S.Backdrop onClick={onCloseModal}></S.Backdrop>
}

export default Backdrop
