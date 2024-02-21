import React, { useState } from "react";
import styled from "styled-components";

const DefaultFolder = styled.button`
  padding: 8px 12px 8px 12px;
  background-color: var(--color-white);
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  white-space: nowrap;

  @media (max-width: 767px) {
    padding: 6px 10px;
    font-size: 14px;
  }
`;

const SelectedFolder = styled(DefaultFolder)`
  background-color: var(--primary-color);
  color: white;
`;

const Folder = ({ children, isSelected, onClick }) => {
  console.log(isSelected);
  return isSelected ? (
    <SelectedFolder onClick={onClick}>{children}</SelectedFolder>
  ) : (
    <DefaultFolder onClick={onClick}>{children}</DefaultFolder>
  );
};

export default Folder;
