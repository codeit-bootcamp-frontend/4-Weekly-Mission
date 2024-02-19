import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Share } from '../../assets/icons/share.svg';

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconText = styled.span`
  margin-left: 8px;
`;

const ShareIcon = ({ text }) => {
  return (
    <IconContainer>
      <Share />
      <IconText>{text}</IconText>
    </IconContainer>
  );
};

export default ShareIcon;
