import React from "react"
import { Outlet } from "react-router-dom"
import Header from "components/shared/header/Header"
import Footer from "components/shared/footer/Footer"
import ProfileContextProvider from "context/ProfileContext"
import GlobalStyle from "styles/Global.style"
import styled from "styled-components"

export const Main = styled.main`
  margin-top: 94px;

  @media (max-width: 769px) {
    margin-top: 63px;
  }
`

function Root() {
  return (
    <React.Fragment>
      <ProfileContextProvider>
        <GlobalStyle />
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </ProfileContextProvider>
    </React.Fragment>
  )
}

export default Root
