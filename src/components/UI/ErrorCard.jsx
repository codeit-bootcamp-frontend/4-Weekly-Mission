import React from "react"
import Card from "./Card"

import * as S from "./ErrorCard.style"

function ErrorCard({ children }) {
  return (
    <S.Wrapper>
      <Card className="errorCard">
        <div className="emoji">❗️</div>
        <span className="message">{children}</span>
      </Card>
    </S.Wrapper>
  )
}

export default ErrorCard
