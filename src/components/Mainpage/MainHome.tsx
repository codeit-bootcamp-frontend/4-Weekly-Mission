import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  margin: 20px;
  background-color: #6d6afe;
  color: black;
  border-radius: 25px;
  text-decoration: none;
`;

function MainHome() {
  return (
    <Wrapper>
      <StyledLink to="/shared">Shared Page</StyledLink>
      <StyledLink to="/folder">Folder page</StyledLink>
    </Wrapper>
  );
}

export default MainHome;
