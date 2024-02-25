import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Delete } from '../../assets/icons/delete.svg';

const DeleteIcon = ({ text, onClick }) => {
  return (
    <IconContainer onClick={onClick}>
      <Delete />
      <IconText>{text}</IconText>
    </IconContainer>
  );
};

export default DeleteIcon;

const IconContainer = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: #fff;
  color: #9fa6b2;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
`;

const IconText = styled.span`
  margin-left: 8px;
`;
