import styled from "styled-components";

export const Container = styled.footer`
  ${({ theme }) => theme.displays.spaceBetween};
  height: 160px;
  margin-top: auto;
  padding: 32px 104px 64px 104px;

  background: ${({ theme }) => theme.colors.black};

  font-family: Acme;
  ${({ theme }) => theme.fonts.regular};
  ${({ theme }) => theme.bolds.normal};

  @media ${({ theme }) => theme.devices.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 60px;
  }
`;

export const Company = styled.div`
  color: ${({ theme }) => theme.colors.gray60};

  @media ${({ theme }) => theme.devices.mobile} {
    grid-column: 1;
    grid-row: 2;
  }
`;

export const LinkBox = styled.div`
  display: flex;
  width: 181px;
  gap: 30px;

  color: ${({ theme }) => theme.colors.gray20};

  @media ${({ theme }) => theme.devices.mobile} {
    grid-column: 1;
    grid-row: 1;
  }
`;

export const SocialBox = styled.div`
  display: flex;
  gap: 12px;

  @media ${({ theme }) => theme.devices.mobile} {
    justify-self: end;
    grid-column: 2;
    grid-row: 1;
  }
`;
