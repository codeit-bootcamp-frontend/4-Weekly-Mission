import React, { useContext } from "react"
import "./header.css"
import Logo from "./Logo"
import Profile from "./Profile"
import Wrapper from "../../layout/Wrapper"
import { ProfileContext } from "../../../context/ProfileContext"

function Header() {
  const { data } = useContext(ProfileContext)

  return (
    <header className="header">
      <Wrapper className="header-container">
        <Logo />
        <div>
          {!data && (
            <a href="/signin.html" className="login-btn">
              로그인
            </a>
          )}
          {data && <Profile data={data} />}
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
