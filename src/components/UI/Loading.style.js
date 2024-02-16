import styled, { keyframes } from "styled-components"
import { Wrapper as W } from "components/Layout/Layout.style"

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

export const Wrapper = styled(W)`
  position: relative;
  height: 164px;

  .loader {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .loader:before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  .circular {
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
  }

  .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: ${dash} 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
  }
`
