import React from "react";
import styled from "styled-components";

const PopoverContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 2px;

  width: 100px;
  height: 64px;
  background: white;

  position: absolute;
  right: -20%;
  top: 100%;
  z-index: 1;

  box-shadow: 0px 2px 8px 0px #3332361a;
`;

const Popover = ({ children, isOpen }) => {
  return <PopoverContainer isOpen={isOpen}>{children}</PopoverContainer>;
};

export default Popover;
