import React from "react"
import logoImage from "assets/images/logo.svg"
import "./Logo.css"

function Logo() {
  return (
    <h1 className="header-logo">
      <a href="/">
        <img src={logoImage} alt="메인 페이지 바로가기" />
      </a>
    </h1>
  )
}

export default Logo
