import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: #f0f6ff;
  padding: 32px 200px;

  @media (max-width: 1199px) {
    padding: 32px 32px;
  }
`;
