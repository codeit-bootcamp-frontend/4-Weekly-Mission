import styled from "styled-components";

export const Container = styled.footer`
  ${({ theme }) => theme.displays.spaceBetween};
  height: 10rem;

  margin-top: auto;
  padding: 2rem 6.5rem 4rem 6.5rem;

  background: ${({ theme }) => theme.colors.black};

  font-family: Acme;
  ${({ theme }) => theme.fonts.regular};
  ${({ theme }) => theme.bolds.normal};

  @media ${({ theme }) => theme.devices.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 3.75rem;
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
  width: 11.3rem;
  gap: 1.87rem;

  color: ${({ theme }) => theme.colors.gray20};

  @media ${({ theme }) => theme.devices.mobile} {
    grid-column: 1;
    grid-row: 1;
  }
`;

export const SocialBox = styled.div`
  display: flex;
  gap: 0.75rem;

  @media ${({ theme }) => theme.devices.mobile} {
    justify-self: end;
    grid-column: 2;
    grid-row: 1;
  }
`;
