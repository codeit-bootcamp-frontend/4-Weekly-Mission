import React from "react"
import Wrapper from "components/layout/Wrapper"

import "./footer.css"
import FooterNavList from "./NavList"
import FooterSnsList from "./SnsList"

function Footer() {
  return (
    <footer className="footer">
      <Wrapper className="footer-container">
        <span className="footer-copyright">©codeit - {new Date().getFullYear()}</span>
        <FooterNavList />
        <FooterSnsList />
      </Wrapper>
    </footer>
  )
}

export default Footer
