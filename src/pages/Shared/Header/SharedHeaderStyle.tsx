import styled from "styled-components";

export const Container = styled.header`
  ${({ theme }) => theme.displays.columnCenter}
  margin: 0 auto;
  padding: 20px 0 60px;
  gap: 8px;

  @media ${({ theme }) => theme.devices.mobile} {
    padding: 10px 0 40px;
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;

  @media ${({ theme }) => theme.devices.mobile} {
    width: 40px;
    height: 40px;
  }
`;

export const Owner = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.regular};
  ${({ theme }) => theme.bolds.normal};

  @media ${({ theme }) => theme.devices.mobile} {
    ${({ theme }) => theme.fonts.regularSmall};
  }
`;

export const Folder = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.subTitle};
  ${({ theme }) => theme.bolds.bold};

  @media ${({ theme }) => theme.devices.mobile} {
    ${({ theme }) => theme.fonts.subTitleSmall};
    letter-spacing: -0.2px;
  }
`;
