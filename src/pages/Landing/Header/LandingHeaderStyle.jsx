import styled from "styled-components";

export const Container = styled.header`
  ${({ theme }) => theme.displays.columnCenter}
  gap: 40px;
  padding-top: 70px;

  @media ${({ theme }) => theme.devices.tablet} {
    padding-top: 40px;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    padding: 28px 33px 0;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.mainTitle}
  ${({ theme }) => theme.bolds.titleBold}
  text-align: center;

  @media ${({ theme }) => theme.devices.mobile} {
    ${({ theme }) => theme.fonts.mainTitleMobile}
  }
`;

export const Gradient = styled.span`
  ${({ theme }) => theme.gradients.blueToPink};
`;

export const Image = styled.img`
  width: 1118px;
  height: 659px;

  @media ${({ theme }) => theme.devices.tablet} {
    width: 650px;
    height: 383px;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    width: 325px;
    height: 160px;
  }
`;

export const Br = styled.br``;
export const TabletBr = styled.br`
  display: none;
  @media ${({ theme }) => theme.devices.tablet} {
    display: block;
  }
`;
