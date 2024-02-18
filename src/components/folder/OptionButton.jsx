import React from 'react';
import Share from 'assets/images/share.png';
import Rename from 'assets/images/pen.png';
import Delete from 'assets/images/delete.png';
import styled from 'styled-components';

const OptionButton = () => {
  const BUTTON = [
    { url: Share, name: '공유' },
    { url: Rename, name: '이름 변경' },
    { url: Delete, name: '삭제' },
  ];
  return (
    <OptionContainer>
      {BUTTON.map(button => (
        <ButtonContainer key={button.name}>
          <OptionIcon $url={button.url}></OptionIcon>
          <OptionText>{button.name}</OptionText>
        </ButtonContainer>
      ))}
    </OptionContainer>
  );
};

const OptionContainer = styled.div`
  display: flex;
  gap: 12px;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 4px;
  cursor: pointer;
`;
const OptionIcon = styled.div`
  width: 18px;
  height: 18px;
  background-image: url(${({ $url }) => $url});
  background-size: cover;
`;
const OptionText = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 16.71px;
  color: ${props => props.theme.gray20};
`;
export default OptionButton;
