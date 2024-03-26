import styled from "styled-components";

interface ButtonProps {
  $linear: boolean;
}

export const EditBtn = styled.button<ButtonProps>`
  padding: 1.6rem 2rem;
  border-radius: 8px;
  background: ${({ $linear }) =>
    $linear
      ? "linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%)"
      : "#FF5B56"};
  width: 100%;
  cursor: pointer;
  color: #f5f5f5;
  font-size: 1.6rem;
`;
