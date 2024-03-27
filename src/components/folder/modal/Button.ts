import styled, { css } from "styled-components";

const Button = styled.button<{ $btnColor: "red" | "blue" }>`
  border: none;
  width: 100%;
  height: 50px;
  font-size: 16px;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  ${({ $btnColor }) =>
    $btnColor === "red"
      ? css`
          background-color: #ff5b56;
        `
      : css`
          background: var(
            --gra-purpleblue-to-skyblue,
            linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
          );
        `}
`;

export default Button;
