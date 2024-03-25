import { ReactNode } from "react"
import * as S from "./Card.style"

interface ButtonProps {
  children: ReactNode
  tagName: string
}

function Card({ children, tagName = "div" }: ButtonProps) {
  return <S.Card as={tagName}>{children}</S.Card>
}

export default Card
