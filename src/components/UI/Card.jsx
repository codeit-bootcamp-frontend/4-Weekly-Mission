import React from "react"

import * as S from "./Card.style"

function Card({ children, tagName = "div" }) {
  return <S.Card as={tagName}>{children}</S.Card>
}

export default Card
