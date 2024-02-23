import React from "react";
import { styled } from "styled-components";

export const BlueButton = ({ size, margin, text }) => {
  return (
    <Button size={size} marginVal={margin}>
      {text}
    </Button>
  );
};

const Button = styled.button`
  display: block;
  width: ${({ size }) => (size ? size : "auto")}px;
  height: auto;
  margin: ${({ marginVal }) => (marginVal ? marginVal : "auto")};
  padding: 16px 20px;
  border: 0px;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  cursor: pointer;

  font-size: 14px;
  font-weight: 600;
  line-height: 21.6px;
  color: #f5f5f5;
`;
