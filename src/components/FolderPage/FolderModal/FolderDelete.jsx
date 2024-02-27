import React from 'react';
import { ModalBody, ModalHeader, StyledRedButton } from './folderModalStyle';

const FolderDelete = ({ onClose, selectedFolderName, onConfirm }) => {
  const handleSubmit = () => {
    /** 추후 변경 api 연동시 사용 */
    alert(`${selectedFolderName}이 추후 삭제됩니다.`);
    onConfirm(selectedFolderName);
    onClose();
  };
  return (
    <>
      <ModalHeader>폴더 삭제</ModalHeader>
      <ModalBody>{selectedFolderName}</ModalBody>
      <StyledRedButton onClick={handleSubmit}>삭제하기</StyledRedButton>
    </>
  );
};

export default FolderDelete;
