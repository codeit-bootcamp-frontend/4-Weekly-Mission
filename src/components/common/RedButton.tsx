import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants/colors";

export const RedButton = ({
  text,
  width,
  height,
  margin,
  padding,
  fontSize,
  radius,
}) => {
  return (
    <Button
      width={width}
      height={height}
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
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  border: 0px;
  border-radius: ${({ radius }) => radius || "0px"};
  margin: ${({ margin }) => margin || "auto"};
  padding: ${({ padding }) => padding || "auto"};
  background: ${COLORS.Red};
  cursor: pointer;

  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  font-weight: 600;
  line-height: 21.6px;
`;
