// src/components/DropdownMenuItem.jsx
import React from 'react';
import styled from 'styled-components';

const MenuItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: var(--gray10-color);
  }
`;

const DropdownMenuItem = ({ children, onClick }) => {
  return <MenuItem onClick={onClick}>{children}</MenuItem>;
};

export default DropdownMenuItem;
