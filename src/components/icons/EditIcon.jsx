import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Edit } from '../../assets/icons/pen.svg';

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconText = styled.span`
  margin-left: 8px;
`;

const EditIcon = ({ text }) => {
  return (
    <IconContainer>
      <Edit />
      <IconText>{text}</IconText>
    </IconContainer>
  );
};

export default EditIcon;
