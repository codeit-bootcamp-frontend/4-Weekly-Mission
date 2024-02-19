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
  gap: 1.2rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  cursor: pointer;
`;
const OptionIcon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  background-image: url(${({ $url }) => $url});
  background-size: cover;
`;
const OptionText = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2rem;
  color: ${props => props.theme.gray20};
`;
export default OptionButton;
