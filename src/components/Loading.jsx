import styled, { keyframes } from "styled-components";

const spin = keyframes`
100% {
      transform: rotate(360deg);
    }
    `;

const SIZES = {
  large: 60,
  medium: 40,
  small: 14,
};

const LoadingSpinner = styled.div`
  display: block;
  width: ${({ size }) => SIZES[size] ?? SIZES["small"]}px;
  height: ${({ size }) => SIZES[size] ?? SIZES["small"]}px;
  border: 4px solid white;
  border-radius: 50%;
  border-top-color: royalblue;
  animation: ${spin} 1s linear infinite;
`;

function Loading({ size }) {
  return <LoadingSpinner size={size} />;
}

export default Loading;
