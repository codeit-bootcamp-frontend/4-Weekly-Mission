import styled from "styled-components";

export const Container = styled.main`
  ${({ theme }) => theme.displays.columnCenter};

  padding: 40px 32px 100px;
  gap: 40px;
  background: ${({ theme }) => theme.colors.white};
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
