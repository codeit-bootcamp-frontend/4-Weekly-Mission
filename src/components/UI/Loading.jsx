import React from "react"

import * as S from "./Loading.style"

function Loading() {
  return (
    <S.Wrapper>
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle
            className="path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="4"
            strokeMiterlimit="10"
            stroke="#6D6AFE"
          />
        </svg>
      </div>
    </S.Wrapper>
  )
}

export default Loading
