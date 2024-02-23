import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants/colors";

export const BlueButton = ({
  text,
  width = "auto",
  height = "auto",
  marginX = "auto",
  marginY = "auto",
  paddingX = "auto",
  paddingY = "auto",
  fontSize = "14px",
  radius = "0px",
}) => {
  return (
    <Button
      width={width}
      height={height}
      marginX={marginX}
      marginY={marginY}
      paddingX={paddingX}
      paddingY={paddingY}
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
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: 0px;
  border-radius: ${({ radius }) => (radius ? `${radius}px` : "0px")};
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  cursor: pointer;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 14)}px;
  font-weight: 600;
  line-height: 21.6px;
  color: ${({ color }) => color};

  margin-left: ${({ marginX }) => marginX}px;
  margin-right: ${({ marginX }) => marginX}px;
  margin-top: ${({ marginY }) => marginY}px;
  margin-bottom: ${({ marginY }) => marginY}px;

  padding-left: ${({ paddingX }) => paddingX}px;
  padding-right: ${({ paddingX }) => paddingX}px;
  padding-top: ${({ paddingY }) => paddingY}px;
  padding-bottom: ${({ paddingY }) => paddingY}px;
`;
