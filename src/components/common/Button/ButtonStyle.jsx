import styled from "styled-components";

export const Button = styled.button`
  ${({ theme }) => theme.displays.rowCenter};
  width: ${(props) => props.size};
  padding: 16px 20px;
  gap: 10px;

  border-radius: 8px;
  background: ${({ theme }) => theme.gradients.blueToSkyblue};

  color: ${({ theme }) => theme.colors.gray10};
  ${({ theme }) => theme.fonts.regularBold};
`;

export const NavigationButton = styled(Button)`
  width: 128px;
`;

export const LargeButton = styled(Button)`
  width: 350px;
`;

export const SmallButton = styled(Button)`
  padding: 10px 16px;
  ${({ theme }) => theme.fonts.regularSmallBold};
`;
