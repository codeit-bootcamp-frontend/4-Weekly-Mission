import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 50px;

  min-height: 1280px;

  padding: 4% 12%;

  background-color: var(--color-white);
  @media (min-width: 767px) and (max-width: 1124px) {
    padding: 4% 32px;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    padding: 4% 32px;
    gap: 30px;
  }
`;
const MainLayout = ({ children }) => {
  return <Main>{children}</Main>;
};

export default MainLayout;
