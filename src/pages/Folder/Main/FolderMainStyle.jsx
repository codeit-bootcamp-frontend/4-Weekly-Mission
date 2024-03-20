import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  ${({ theme }) => theme.displays.columnCenter};

  padding: 40px 32px 100px;
  gap: 40px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Box = styled.div`
  ${({ theme }) => theme.displays.spaceBetween};
  max-width: 1060px;
  width: 100%;

  @media ${({ theme }) => theme.devices.mobile} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.large};
  ${({ theme }) => theme.bolds.bold};
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  column-gap: 25px;
  row-gap: 20px;

  @media ${({ theme }) => theme.devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.devices.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NoneLink = styled.section`
  ${({ theme }) => theme.displays.columnCenter};
  height: 100px;
`;
