import styled from "styled-components";

export const Button = styled.button`
  ${({ theme }) => theme.displays.rowCenter};
  width: 128px;
  padding: 16px 20px;
  gap: 10px;

  border-radius: 8px;
  background: ${({ theme }) => theme.gradients.blueToSkyblue};

  color: ${({ theme }) => theme.colors.gray10};
  ${({ theme }) => theme.fonts.regularLarge};
  ${({ theme }) => theme.bolds.bold};
`;

export const NavigationButton = styled(Button)`
  @media ${({ theme }) => theme.devices.mobile} {
    width: 80px;
    padding: 10px 16px;

    ${({ theme }) => theme.fonts.regularSmall};
    ${({ theme }) => theme.bolds.bold};
  }
`;

export const MainHeaderButton = styled(Button)`
  width: 350px;

  @media ${({ theme }) => theme.devices.mobile} {
    width: 200px;
    padding: 10px 16px;

    ${({ theme }) => theme.fonts.regularSmall};
    ${({ theme }) => theme.bolds.bold};
  }
`;

export const SmallButton = styled(Button)`
  padding: 10px 16px;
  ${({ theme }) => theme.fonts.regularSmallBold};
`;

export const DeleteModalButton = styled(Button)`
  width: 280px;
  background: ${({ theme }) => theme.colors.red};

  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const AddModalButton = styled(Button)`
  width: 280px;

  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
