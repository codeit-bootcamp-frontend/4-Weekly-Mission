import styled, { css } from "styled-components";

export const Icon = styled.img<{ size: "large" | "small" }>`
  ${({ size }) => css`
    width: ${size === "large" ? "42px" : "20px"};
    height: ${size === "large" ? "42px" : "20px"};
  `}
`;
