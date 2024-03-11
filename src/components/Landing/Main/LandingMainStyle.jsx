import styled from "styled-components";

export const Container = styled.main`
  ${({ theme }) => theme.displays.columnCenter};
  gap: 100px;
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.white};
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  column-gap: 157px;
  row-gap: 10px;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.title};
  width: 291px;
  align-self: end;
  justify-self: ${({ isEven }) => (isEven ? "start" : "end")};
  grid-row: 1;
  grid-column: ${({ isEven }) => (isEven ? 1 : 2)};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray100};
  width: 291px;
  justify-self: ${({ isEven }) => (isEven ? "start" : "end")};
  font-family: Abel;
  ${({ theme }) => theme.fonts.regular};
  grid-row: 2;
  grid-column: ${({ isEven }) => (isEven ? 1 : 2)};
`;

export const Image = styled.img`
  width: 550px;
  height: 450px;
  border-radius: 15px;
  grid-row: span 2;
  grid-column: ${({ isEven }) => (isEven ? 2 : 1)};
`;
