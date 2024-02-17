import React from "react"

import * as S from "./Logo.style"
import logoImage from "assets/images/logo.svg"

function Logo() {
  return (
    <S.Logo>
      <a href="/">
        <img src={logoImage} alt="메인 페이지 바로가기" />
      </a>
    </S.Logo>
  )
}

export default Logo
