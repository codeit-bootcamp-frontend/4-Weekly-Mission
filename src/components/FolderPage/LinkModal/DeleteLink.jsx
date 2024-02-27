import React from 'react';
import {
  CloseIcon,
  ModalBackground,
  ModalBody,
  ModalContainer,
  ModalHeader,
  StyledRedButton,
} from './linkModalStyle';

const DeleteLink = ({ onClose, linkId, linkUrl }) => {
  const handleSubmit = () => {
    /** 추후 변경 api 연동시 사용 */
    onClose();
  };

  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseIcon onClick={onClose} />
        <ModalHeader>링크 삭제</ModalHeader>
        <ModalBody>{linkUrl}</ModalBody>
        <StyledRedButton onClick={handleSubmit}>삭제하기</StyledRedButton>
      </ModalContainer>
    </ModalBackground>
  );
};

export default DeleteLink;
