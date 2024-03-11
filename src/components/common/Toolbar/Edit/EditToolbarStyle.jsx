import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;
export const Image = styled.img`
  width: 18px;
  height: 18px;
`;

export const Box = styled.div`
  display: flex;
`;
export const Text = styled.div`
  color: ${({ theme }) => theme.colors.gray60};
  ${({ theme }) => theme.fonts.regularBold};
`;
