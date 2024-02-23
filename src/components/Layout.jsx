import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const ContainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeightDiv = styled.div`
  min-height: 100vh;
`;

function Layout() {
  return (
    <ContainDiv>
      <NavBar />
      <HeightDiv>
        <Outlet />
      </HeightDiv>
      <Footer />
    </ContainDiv>
  );
}

export default Layout;
