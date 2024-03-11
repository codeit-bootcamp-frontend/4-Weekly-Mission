import styled from "styled-components";

export const Container = styled.main`
  ${({ theme }) => theme.displays.columnCenter};
  padding: 40px 0 100px;
  gap: 40px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Box = styled.div`
  width: 1060px;
  ${({ theme }) => theme.displays.spaceBetween};
`;

export const Title = styled.h1`
  ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.large};
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  column-gap: 25px;
  row-gap: 20px;
`;

export const NoneLink = styled.section`
  ${({ theme }) => theme.displays.columnCenter};
  height: 100px;
`;
