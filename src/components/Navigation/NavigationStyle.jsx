import styled from "styled-components";

export const Container = styled.nav`
  position: sticky;
  top: 0;
  gap: 8px;
  padding: 20px 200px;

  ${({ theme }) => theme.displays.flexSpaceBetween};
  background: ${({ theme }) => theme.colors.background};
`;

export const Logo = styled.img`
  width: 133px;
  height: 24px;
`;
