import React from "react";
import styled from "styled-components";

const Text = styled.button`
  width: 100px;
  height: 31px;
  padding: 7px 12px 7px 12px;

  background: none;
  border: none;
  font-size: 14px;
  font-weight: 400;

  &:hover {
    background-color: var(--color-background);
    color: var(--color-primary);
  }
`;
const TextButton = ({ children, onClick }) => {
  return <Text onClick={onClick}>{children}</Text>;
};

export default TextButton;
