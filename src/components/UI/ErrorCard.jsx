import React from "react"
import * as S from "./ErrorCard.style"

function ErrorCard({ children }) {
  return (
    <S.Wrapper>
      <S.ErrorCard>
        <div className="emoji">❗️</div>
        <span className="message">{children}</span>
      </S.ErrorCard>
    </S.Wrapper>
  )
}

export default ErrorCard
