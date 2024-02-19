import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Delete } from '../../assets/icons/delete.svg';

const DeleteIcon = ({ text }) => {
  return (
    <IconContainer>
      <Delete />
      <IconText>{text}</IconText>
    </IconContainer>
  );
};

export default DeleteIcon;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconText = styled.span`
  margin-left: 8px;
`;
