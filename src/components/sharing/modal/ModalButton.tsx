import React, { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";

type ModalButtonProps = {
  $buttonStyle: "red" | "blue";
};
const StyledButton = styled.button<ModalButtonProps>`
  width: 280px;
  padding: 16px 20px;
  border-radius: 8px;
  border: none;
  background: ${({ $buttonStyle }) =>
    $buttonStyle === "blue"
      ? "var(--gra-purpleblue-to-skyblue,linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)"
      : "var(--color-red)"};
  color: #f5f5f5;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

interface Props {
  children: ReactNode;
  buttonStyle: "red" | "blue";
  onClick?: MouseEventHandler<HTMLElement>;
}

function ModalButton({ children, buttonStyle, onClick }: Props) {
  return (
    <StyledButton onClick={onClick} $buttonStyle={buttonStyle}>
      {children}
    </StyledButton>
  );
}

export default ModalButton;
