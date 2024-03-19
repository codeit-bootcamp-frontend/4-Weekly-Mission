import styled from "styled-components";

export const Container = styled.main`
  ${({ theme }) => theme.displays.columnCenter};
  padding: 120px 0;
  gap: 100px;

  background: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 80px 0;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    padding: 40px 32px;
    gap: 80px;
  }
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);

  width: 998px;
  column-gap: 100px;
  row-gap: 10px;

  @media ${({ theme }) => theme.devices.tablet} {
    width: 700px;
    column-gap: 51px;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    grid-template-columns: auto;
    grid-template-rows: auto;

    width: 100%;
    row-gap: 0;
    column-gap: 0;
  }
`;

export const Title = styled.h2`
  align-self: end;
  justify-self: ${({ $isEven }) => ($isEven ? "start" : "end")};

  width: 291px;
  grid-row: 1;
  grid-column: ${({ $isEven }) => ($isEven ? 1 : 2)};

  ${({ theme }) => theme.fonts.title};
  ${({ theme }) => theme.bolds.titleBold};

  @media ${({ theme }) => theme.devices.mobile} {
    justify-self: start;

    grid-column: 1;
    grid-row: 1;

    ${({ theme }) => theme.fonts.large};
  }
`;

export const Text = styled.p`
  justify-self: ${({ $isEven }) => ($isEven ? "start" : "end")};

  width: 291px;
  grid-row: 2;
  grid-column: ${({ $isEven }) => ($isEven ? 1 : 2)};

  color: ${({ theme }) => theme.colors.gray100};

  font-family: Abel;
  ${({ theme }) => theme.fonts.regularSmall};
  ${({ theme }) => theme.bolds.semiBold};

  @media ${({ theme }) => theme.devices.mobile} {
    justify-self: start;

    width: 100%;
    grid-column: 1;
    grid-row: 3;
  }
`;

export const Image = styled.img`
  width: 550px;
  height: 450px;

  grid-row: span 2;
  grid-column: ${({ $isEven }) => ($isEven ? 2 : 1)};

  border-radius: 15px;

  @media ${({ theme }) => theme.devices.tablet} {
    width: 385px;
    height: 315px;
  }

  @media ${({ theme }) => theme.devices.mobile} {
    justify-self: start;

    width: 100%;
    height: 100%;
    padding: 20px 0 16px;

    grid-column: 1;
    grid-row: 2;
  }
`;

const Gradient = styled.span``;

export const LinkGradient = styled(Gradient)`
  ${({ theme }) => theme.gradients.pinkToBlue};
`;

export const ManageGradient = styled(Gradient)`
  ${({ theme }) => theme.gradients.yellowToSkyblue};
`;

export const ShareGradient = styled(Gradient)`
  ${({ theme }) => theme.gradients.blueToWhite};
`;

export const SearchGradient = styled(Gradient)`
  ${({ theme }) => theme.gradients.pinkToSkyblue};
`;

export const TabletBr = styled.br`
  display: block;
  @media ${({ theme }) => theme.devices.mobile} {
    display: none;
  }
`;

export const MobileBr = styled.br`
  display: none;
  @media ${({ theme }) => theme.devices.mobile} {
    display: block;
  }
`;
