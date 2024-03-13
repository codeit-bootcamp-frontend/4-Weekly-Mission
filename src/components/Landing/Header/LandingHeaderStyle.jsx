import styled from "styled-components";

export const Container = styled.header`
  ${({ theme }) => theme.displays.columnCenter}
  gap: 40px;
  padding: 70px 360px 0px 360px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.mainTitle}
`;

export const Gradient = styled.span`
  ${({ theme }) => theme.gradients.blueToPink};
`;

export const Image = styled.img`
  width: 1118px;
  height: 659px;
`;
