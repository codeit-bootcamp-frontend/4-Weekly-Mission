import React from "react"
import * as S from "./Button.style"

function Button({ children, ...styleProps }) {
  return <S.Button {...styleProps}>{children}</S.Button>
}

export default Button
