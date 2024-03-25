import React from 'react';
import * as Styled from './Modal.styled';

interface ModalFormType {
  buttonText: string;
}

function ModalForm({ buttonText }: ModalFormType) {
  return (
    <form className="modal__form">
      <Styled.ModalLabel htmlFor="modal--input">{`폴더 ${buttonText} 입력창`}</Styled.ModalLabel>
      <Styled.ModalInput id="modal--input" type="text" placeholder="내용 입력" />
      <Styled.ModalButtonBlue>{buttonText}</Styled.ModalButtonBlue>
    </form>
  );
}

export default ModalForm;
