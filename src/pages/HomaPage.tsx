import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: var(--primary);
  text-decoration: none;
  margin-right: 10px;
  font-weight: 900;
  font-size: 30px;
  border: 2px solid;
  padding: 10px 20px;
  border-radius: 8px;
  &:hover {
    background-color: var(--primary-background);
  }
`;

function HomaPage() {
  return (
    <Container>
      <StyledLink to={"shared"}>Shared</StyledLink>
      <StyledLink to={"folder"}>Folders</StyledLink>
    </Container>
  );
}

export default HomaPage;
