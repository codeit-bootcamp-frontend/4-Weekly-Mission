import React from "react";
import styled from "styled-components";

const FolderHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 5%;

  background-color: var(--color-background);
`;

const FolderHeaderLayout = ({ children }) => {
  return <FolderHeader>{children}</FolderHeader>;
};

export default FolderHeaderLayout;
