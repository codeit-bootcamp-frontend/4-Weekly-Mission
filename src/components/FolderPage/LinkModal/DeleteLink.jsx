import React from 'react';
import {
  CloseIcon,
  ModalBackground,
  ModalBody,
  ModalContainer,
  ModalHeader,
  StyledRedButton,
} from './linkModalStyle';

const DeleteLink = ({
  onClose,
  selectedFolderName,
  selectedFolderId,
  onConfirm,
}) => {
  const handleSubmit = () => {
    /** 추후 변경 api 연동시 사용 */
    alert(`${selectedFolderName}이 추후 삭제됩니다.`);
    onConfirm(selectedFolderName);
    onClose();
  };

  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseIcon onClick={onClose} />
        <ModalHeader>링크 삭제</ModalHeader>
        <ModalBody>{selectedFolderName}</ModalBody>
        <StyledRedButton onClick={handleSubmit}>삭제하기</StyledRedButton>
      </ModalContainer>
    </ModalBackground>
  );
};

export default DeleteLink;
