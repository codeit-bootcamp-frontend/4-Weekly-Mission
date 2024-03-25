import React, { ButtonHTMLAttributes, ReactNode } from "react"
import * as S from "./Button.style"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  as?: any
  to?: any
  $bgColor?: string
  $type?: string
}

function Button({ children, ...styleProps }: ButtonProps) {
  return <S.Button {...styleProps}>{children}</S.Button>
}

export default Button
