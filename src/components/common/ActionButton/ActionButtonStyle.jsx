import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.displays.flexCenterRow};
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
