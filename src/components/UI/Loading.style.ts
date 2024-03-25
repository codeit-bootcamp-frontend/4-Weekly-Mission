import styled, { keyframes } from "styled-components"

const rotate = keyframes`
100% {
    transform: rotate(360deg);
  }
`
const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`

export const Loader = styled.div<{ $size: number; $top: string; $isCenter: boolean }>`
  width: ${({ $size }) => ($size ? `${$size}px` : `60px`)};
  height: ${({ $size }) => ($size ? `${$size}px` : `60px`)};
  position: absolute;
  top: ${({ $top }) => ($top ? `${$top}vh` : `50%`)};
  left: ${({ $isCenter }) => ($isCenter ? `50%` : 0)};
  transform: translate(${({ $isCenter }) => ($isCenter ? `-50%, -50%` : `0, -50%`)});
  z-index: 9999;

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`

export const Circular = styled.svg`
  animation: ${rotate} 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: ${dash} 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
  }
`
