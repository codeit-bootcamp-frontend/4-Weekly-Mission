import styled from "styled-components";

export const Container = styled.nav<{ $path: string }>`
  position: ${({ $path }) =>
    $path !== "/folder" && $path !== "/shared" ? "sticky" : "static"};
  top: 0;

  ${({ theme }) => theme.displays.spaceBetween};

  padding: 1.25rem 12.5rem;
  gap: 8px;

  background: ${({ theme }) => theme.colors.background};

  z-index: 99;

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 1.25rem 2rem 1.25rem 0;
  }

  @media ${({ theme }) => theme.devices.mobile} {
  }
`;

export const Logo = styled.img`
  width: 133px;
  height: 24px;

  @media ${({ theme }) => theme.devices.tablet} {
    padding-left: 2rem;
  }

  @media ${({ theme }) => theme.devices.mobile} {
    width: 88.7px;
    height: 16px;
  }
`;
