import React from "react"

import * as S from "./Loading.style"

function Loading({ isCenter = true, size = 60, top = "" }) {
  return (
    <S.Loader $isCenter={isCenter} $size={size} $top={top}>
      <S.Circular viewBox="25 25 50 50">
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
      </S.Circular>
    </S.Loader>
  )
}

export default Loading
