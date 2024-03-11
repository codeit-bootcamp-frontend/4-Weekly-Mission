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
  background: ${({ theme }) => theme.gradients.blueToPink};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Image = styled.img`
  width: 1118px;
  height: 659px;
`;
