import React from 'react';
import GNB from '../components/common/layout/header/GNB';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <Nav>
      <GNB />
    </Nav>
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
