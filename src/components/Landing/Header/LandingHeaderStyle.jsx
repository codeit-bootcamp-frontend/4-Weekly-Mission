import styled from "styled-components";

export const Container = styled.header`
  ${({ theme }) => theme.displays.flexCenter}
  gap: 40px;
  padding: 70px 360px 0px 360px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.headerTitle}
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
