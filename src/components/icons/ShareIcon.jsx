import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Share } from '../../assets/icons/share.svg';

const ShareIcon = ({ text, onClick }) => {
  return (
    <IconContainer onClick={onClick}>
      <Share />
      <IconText>{text}</IconText>
    </IconContainer>
  );
};

export default ShareIcon;

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
