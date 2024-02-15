import React from "react"
import Wrapper from "components/layout/Wrapper"

import "./footer.css"
import Copyright from "./Copyright"
import FooterNavList from "./NavList"
import FooterSnsList from "./SnsList"

function Footer() {
  return (
    <footer className="footer">
      <Wrapper className="footer-container">
        <Copyright />
        <FooterNavList />
        <FooterSnsList />
      </Wrapper>
    </footer>
  )
}

export default Footer
