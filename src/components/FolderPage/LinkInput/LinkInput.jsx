import React from 'react';
import {
  LinkContainer,
  LinkInputStyle,
  InputContainer,
  AddButton,
} from './linkInputStyle';

const LinkInput = () => {
  return (
    <LinkContainer>
      <InputContainer>
        <LinkInputStyle placeholder="링크를 추가해 보세요" type="text" />
        <AddButton>추가하기</AddButton>
      </InputContainer>
    </LinkContainer>
  );
};

export default LinkInput;
