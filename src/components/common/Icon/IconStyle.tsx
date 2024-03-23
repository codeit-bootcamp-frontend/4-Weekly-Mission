import styled, { css } from "styled-components";

export const IconBox = styled.a`
  ${({ theme }) => theme.displays.columnCenter};
  cursor: pointer;
`;

export const Icon = styled.img<{ size: "large" | "small" }>`
  ${({ size }) => css`
    width: ${size === "large" ? "42px" : "20px"};
    height: ${size === "large" ? "42px" : "20px"};
  `}
`;

export const IconText = styled.h3`
  color: ${({ theme }) => theme.colors.gray100};
  font-family: Inter;
  ${({ theme }) => theme.fonts.small};
  ${({ theme }) => theme.bolds.normal};
`;
