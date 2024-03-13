import styled from "styled-components";

export const Container = styled.button`
  ${({ theme }) => theme.displays.rowCenter};
  gap: 4px;
`;
export const Title = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.fonts.regular};
  text-align: center;
`;
export const Image = styled.img`
  width: 16px;
  height: 16px;
`;
