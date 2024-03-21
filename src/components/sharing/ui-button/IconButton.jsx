import React from "react";
import styled from "styled-components";

const Icon = styled.button`
  background: none;
  border: none;
`;
const IconButton = ({ onClick, children, className }) => {
  return (
    <Icon onClick={onClick} className={className}>
      {children}
    </Icon>
  );
};

export default IconButton;
