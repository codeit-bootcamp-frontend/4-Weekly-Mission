import React, { useContext } from "react"
import Logo from "./Logo"
import Profile from "./Profile"
import { ProfileContext } from "context/ProfileContext"

import * as S from "./Header.style"

function Header() {
  const { data } = useContext(ProfileContext)

  return (
    <S.Header>
      <S.Wrapper>
        <Logo />
        {data ? (
          <Profile data={data} />
        ) : (
          <S.LoginButton href="/signin.html" className="login-btn">
            로그인
          </S.LoginButton>
        )}
      </S.Wrapper>
    </S.Header>
  )
}

export default Header
