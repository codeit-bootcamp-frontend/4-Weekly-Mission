import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants/colors";

export const BlueButton = ({
  width,
  heigth,
  margin,
  padding,
  text,
  fontSize,
  radius,
}) => {
  return (
    <Button
      width={width}
      margin={margin}
      padding={padding}
      color={COLORS.White}
      fontSize={fontSize}
      radius={radius}
    >
      {text}
    </Button>
  );
};

const Button = styled.button`
  display: block;
  width: ${({ width }) => (width ? width : "auto")}px;
  height: ${({ height }) => (height ? height : "auto")}px;
  margin: ${({ margin }) => (margin ? margin : "auto")};
  padding: ${({ padding }) => (padding ? padding : "auto")};
  border: 0px;
  border-radius: ${({ radius }) => radius || radius}px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  cursor: pointer;

  font-size: ${({ fontSize }) => fontSize || 14}px;
  font-weight: 600;
  line-height: 21.6px;
  color: ${({ color }) => color};
`;
