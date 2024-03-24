import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 230px;
  left: 300px;
  width: 90px;
  z-index: 2;
  cursor: pointer;

  ${({ theme }) => theme.fonts.regularSmall};
`;

export const Delete = styled.button`
  ${({ theme }) => theme.displays.columnCenter};
  text-align: center;

  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Add = styled.button`
  ${({ theme }) => theme.displays.columnCenter};
  text-align: center;
  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.gray10};
  color: ${({ theme }) => theme.colors.primary};
`;
