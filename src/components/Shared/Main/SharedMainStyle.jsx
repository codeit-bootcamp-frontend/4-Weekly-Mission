import styled from "styled-components";

export const Container = styled.main`
  ${({ theme }) => theme.displays.flexCenter};
  padding: 40px 0 100px;
  gap: 40px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  column-gap: 25px;
  row-gap: 20px;
`;
