import styled from "styled-components";

export const Container = styled.main`
  ${({ theme }) => theme.displays.columnCenter};

  padding: 2.5rem 2rem 6.25rem;
  gap: 2.5rem;
  background: ${({ theme }) => theme.colors.white};
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
