import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  ${({ theme }) => theme.displays.columnCenter};
  height: 100%;
  padding: 2.5rem 2rem 6.25rem;
  gap: 2.5rem;
  background: ${({ theme }) => theme.colors.white};
`;

export const Box = styled.div`
  ${({ theme }) => theme.displays.spaceBetween};
  max-width: 66.25rem;
  width: 100%;

  @media ${({ theme }) => theme.devices.mobile} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
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
  column-gap: 1.56rem;
  row-gap: 1.25rem;

  @media ${({ theme }) => theme.devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.devices.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NoneLink = styled.section`
  ${({ theme }) => theme.displays.columnCenter};
  height: 6.25rem;
`;
