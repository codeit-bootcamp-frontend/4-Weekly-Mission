
import styled, { keyframes } from "styled-components";


const spin = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const Loading = styled.div`
  width: 8rem;
  height: 8rem;
  margin: auto;
  border: 10px solid #f5f5f5;
  border-top: 10px solid #6903f8;
  border-radius: 50%;
  animation: ${spin} 1s infinite linear;
`;

export default Loading;

