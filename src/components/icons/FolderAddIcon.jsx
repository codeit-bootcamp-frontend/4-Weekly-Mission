import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Add } from '../../assets/icons/add.svg';

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconText = styled.span`
  margin-right: 8px;
`;

const FolderAddIcon = ({ text }) => {
  return (
    <IconContainer>
      <IconText>{text}</IconText>
      <Add />
    </IconContainer>
  );
};

export default FolderAddIcon;
