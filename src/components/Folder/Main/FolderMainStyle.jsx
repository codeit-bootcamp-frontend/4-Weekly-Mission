import styled from "styled-components";

export const Container = styled.main`
  ${({ theme }) => theme.displays.flexCenter};
  padding: 40px 0 100px;
  gap: 40px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Box = styled.div`
  width: 1060px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: #000;

  /* Linkbrary/h3-semibold */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  column-gap: 25px;
  row-gap: 20px;
`;

export const NoneLink = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
