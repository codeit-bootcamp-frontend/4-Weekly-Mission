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
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Image = styled.img`
  width: 1118px;
  height: 659px;

  border-radius: 25px;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
`;
