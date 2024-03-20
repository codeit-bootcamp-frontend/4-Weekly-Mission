import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const Image = styled.img`
  width: 18px;
  height: 18px;
`;

export const Box = styled.div`
  display: flex;
  gap: 4px;
`;
export const Text = styled.div`
  color: ${({ theme }) => theme.colors.gray60};
  ${({ theme }) => theme.fonts.regularSmall};
  ${({ theme }) => theme.bolds.bold};
`;
