import React from 'react';
import styled from 'styled-components';

const DropdownMenuItem = ({ children, onClick }) => {
  return <MenuItem onClick={onClick}>{children}</MenuItem>;
};

export default DropdownMenuItem;

const MenuItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 400;
  &:hover {
    background-color: var(--gray10-color);
    color: var(--Linkbrary-primary-color, #6d6afe);
  }
`;
