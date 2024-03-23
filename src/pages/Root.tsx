import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "components/shared/header/Header"
import Footer from "components/shared/footer/Footer"
import ProfileContextProvider from "context/ProfileContext"
import GlobalStyle from "styles/Global.style"
import styled from "styled-components"

export const Main = styled.main<{ $isNotFixed: boolean }>`
  margin-top: ${({ $isNotFixed }) => ($isNotFixed ? "0" : "94px")};

  @media (max-width: 769px) {
    margin-top: ${({ $isNotFixed }) => ($isNotFixed ? "0" : "63px")};
  }
`

function Root() {
  const location = useLocation()
  const isPathIncludesFolder = location.pathname.includes("folder") || false

  return (
    <React.Fragment>
      <ProfileContextProvider>
        <GlobalStyle />
        <Header $isNotFixed={isPathIncludesFolder} />
        <Main $isNotFixed={isPathIncludesFolder}>
          <Outlet />
        </Main>
        <Footer />
      </ProfileContextProvider>
    </React.Fragment>
  )
}

export default Root
