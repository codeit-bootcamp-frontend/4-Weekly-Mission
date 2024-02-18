import React, { useContext } from "react"
import Logo from "components/header/Logo"
import Profile from "components/header/Profile"
import Button from "components/UI/Button"
import { ProfileContext } from "context/ProfileContext"

import { Link } from "react-router-dom"

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
          <Button as={Link} to="/signup" $bgColor="gradient" $type="header">
            로그인
          </Button>
        )}
      </S.Wrapper>
    </S.Header>
  )
}

export default Header
