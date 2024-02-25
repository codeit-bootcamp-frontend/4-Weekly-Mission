import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Edit } from '../../assets/icons/pen.svg';

const EditIcon = ({ text, onClick }) => {
  return (
    <IconContainer onClick={onClick}>
      <Edit />
      <IconText>{text}</IconText>
    </IconContainer>
  );
};

export default EditIcon;

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
