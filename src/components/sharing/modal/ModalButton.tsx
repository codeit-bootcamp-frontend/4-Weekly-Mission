import React, { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";

const BlueButton = styled.button`
  width: 280px;
  padding: 16px 20px;
  border-radius: 8px;
  border: none;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  color: var(--Grey-Light, #f5f5f5);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const RedButton = styled(BlueButton)`
  background: var(--Linkbrary-red, #ff5b56);
`;

interface Props {
  children: ReactNode;
  buttonStyle: "red" | "blue";
  onClick?: MouseEventHandler<HTMLElement>;
}

function ModalButton({ children, buttonStyle, onClick }: Props) {
  return buttonStyle === "red" ? (
    <RedButton onClick={onClick}>{children}</RedButton>
  ) : (
    <BlueButton onClick={onClick}>{children}</BlueButton>
  );
}

export default ModalButton;
