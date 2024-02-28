import React from "react";
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
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const RedButton = styled(BlueButton)`
  background: var(--Linkbrary-red, #ff5b56);
`;

function ModalButton({ children, buttonStyle }) {
  return buttonStyle === "red" ? (
    <RedButton>{children}</RedButton>
  ) : (
    <BlueButton>{children}</BlueButton>
  );
}

export default ModalButton;
