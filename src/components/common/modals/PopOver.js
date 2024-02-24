import React from "react";
import { styled } from "styled-components";
import { COLORS } from "constants/colors";

export const PopOver = ({ $isVisible, $options, $top, $right }) => {
  return (
    <MenuOptions $isVisible={$isVisible} $top={$top} $right={$right}>
      {$options.map((option) => (
        <Option key={option}>{option}</Option>
      ))}
    </MenuOptions>
  );
};

const MenuOptions = styled.div`
  width: 100px;
  position: absolute;
  right: ${({ $right }) => $right ?? 0};
  top: ${({ $top }) => $top ?? 0};
  border: 1px;
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
  background-color: #fff;
  z-index: 1;
`;

const Option = styled.p`
  padding: 7px 12px;
  background-color: #fff;
  color: #333236;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;

  &: hover {
    color: ${COLORS.Primary};
    background-color: ${COLORS.Grey_100};
  }
`;
