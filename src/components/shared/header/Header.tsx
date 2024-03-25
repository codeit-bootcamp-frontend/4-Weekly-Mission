import React, { useContext } from "react"
import Logo from "components/shared/header/Logo"
import Profile from "components/shared/header/Profile"
import Button from "components/UI/Button"
import { ProfileContext } from "context/ProfileContext"
import { Link } from "react-router-dom"
import * as S from "./Header.style"

interface HeaderProps {
  $isNotFixed: boolean
}

function Header({ $isNotFixed }: HeaderProps) {
  const { data } = useContext(ProfileContext)

  return (
    <S.Header $isNotFixed={$isNotFixed}>
      <S.HeaderWrapper>
        <Logo />
        {data ? (
          <Profile data={data} />
        ) : (
          <Button as={Link} to="/signup" $bgColor="gradient" $type="header">
            로그인
          </Button>
        )}
      </S.HeaderWrapper>
    </S.Header>
  )
}

export default Header
