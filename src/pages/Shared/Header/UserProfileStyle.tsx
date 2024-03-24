import styled from "styled-components";

export const Container = styled.header`
  ${({ theme }) => theme.displays.columnCenter}
  margin: 0 auto;
  padding: 1.25rem 0 3.75rem;
  gap: 0.5rem;

  @media ${({ theme }) => theme.devices.mobile} {
    padding: 0.63rem 0 2.5rem;
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
  }
`;
