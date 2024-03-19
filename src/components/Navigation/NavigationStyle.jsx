import styled from "styled-components";

export const Container = styled.nav`
  position: ${({ $path }) => ($path !== "/folder" ? "sticky" : "static")};
  top: 0;
  gap: 8px;
  padding: 20px 200px;
  z-index: 99;

  ${({ theme }) => theme.displays.spaceBetween};
  background: ${({ theme }) => theme.colors.background};

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 20px 0;
    margin-right: 32px;
  }

  @media ${({ theme }) => theme.devices.mobile} {
  }
`;

export const Logo = styled.img`
  width: 133px;
  height: 24px;

  @media ${({ theme }) => theme.devices.tablet} {
    margin-left: 32px;
  }

  @media ${({ theme }) => theme.devices.mobile} {
    width: 88.7px;
    height: 16px;
  }
`;
