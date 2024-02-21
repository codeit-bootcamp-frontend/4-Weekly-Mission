import styled, { keyframes } from "styled-components";

const LoadingGlow = keyframes`
50% {
  opacity: 0.5;
}
`;

export const LoadingAnimation = styled.div`
  animation: ${LoadingGlow} 2s ease-in-out infinite;
`;
