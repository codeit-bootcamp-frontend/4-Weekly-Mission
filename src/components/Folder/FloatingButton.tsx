import React from 'react';
import FloatingAddIcon from '../../assets/floating-add.svg';
import * as Styled from './FloatingButton.styled';

function FloatingButton() {
  return (
    <Styled.FloatingButton>
      <Styled.FloatingButtonText>폴더 추가</Styled.FloatingButtonText>
      <Styled.FloatingButtonImg src={FloatingAddIcon} alt="플로팅 버튼 아이콘" />
    </Styled.FloatingButton>
  );
}

export default FloatingButton;
