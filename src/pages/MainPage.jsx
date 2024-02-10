import React from 'react';
import GNB from '../components/common/layout/header/GNB';
import styled from 'styled-components';
import Header from '../components/common/layout/header/Header';
import Search from '../components/main/Search';
import { MainContainer } from '../styles/MainContainer';

const MainPage = () => {
  return (
    <>
      <Nav>
        <GNB />
      </Nav>
      <Header />
      <MainContainer>
        <Search />
      </MainContainer>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #edf7ff;
`;

export default MainPage;
