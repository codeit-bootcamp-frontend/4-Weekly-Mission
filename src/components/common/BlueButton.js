import React from "react";
import { styled } from "styled-components";

export const BlueButton = ({ width, margin, padding, text }) => {
  return (
    <Button width={width} margin={margin} padding={padding}>
      {text}
    </Button>
  );
};

const Button = styled.button`
  display: block;
  width: ${({ width }) => (width ? width : "auto")}px;
  height: auto;
  margin: ${({ margin }) => (margin ? margin : "auto")};
  padding: ${({ padding }) => (padding ? padding : "auto")};
  border: 0px;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  cursor: pointer;

  font-size: 14px;
  font-weight: 600;
  line-height: 21.6px;
  color: #f5f5f5;
`;
