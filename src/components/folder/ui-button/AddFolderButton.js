import React from "react";
import styled from "styled-components";

const TextButton = styled.span`
  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: var(--color-primary);

  white-space: nowrap;
  @media (min-width: 375px) and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 24px 8px 24px;

    position: fixed;
    bottom: 5%;
    left: 30%;
    right: 30%;
    z-index: 1;

    border-radius: 20px;
    background-color: var(--color-primary);
    color: white;
  }
`;
const AddFolderButton = ({ children }) => {
  return <TextButton>{children}</TextButton>;
};

export default AddFolderButton;
