import React from 'react';
import * as Styled from './Modal.styled';

interface ModalTitleType {
  title: string;
}

function ModalTitle({ title }: ModalTitleType) {
  return <Styled.ModalTitle>{title}</Styled.ModalTitle>;
}

export default ModalTitle;
