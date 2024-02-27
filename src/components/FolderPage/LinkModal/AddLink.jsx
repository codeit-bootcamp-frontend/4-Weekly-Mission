import React, { useState } from 'react';
import {
  CloseIcon,
  ModalBackground,
  ModalBody,
  ModalContainer,
  ModalHeader,
  StyledGradientButton,
  StyledList,
  StyledListItem,
  CheckIcon,
} from './linkModalStyle';
import checkIcon from '../../../assets/icons/check.svg';

const AddLink = ({ linkId, linkUrl, folders, onClose }) => {
  const [selectedFolderId, setSelectedFolderId] = useState(null);

  const handleSelectFolder = id => {
    setSelectedFolderId(id);
  };

  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseIcon onClick={onClose} />
        <ModalHeader>폴더에 추가</ModalHeader>
        <ModalBody>{linkUrl}</ModalBody>
        <StyledList>
          {folders.map(folder => (
            <StyledListItem
              key={folder.id}
              className={folder.id === selectedFolderId ? 'selected' : ''}
              onClick={() => handleSelectFolder(folder.id)}
            >
              {folder.name} {folder.link.count}개 링크
              {folder.id === selectedFolderId && (
                <CheckIcon src={checkIcon} alt="Checked" />
              )}
            </StyledListItem>
          ))}
        </StyledList>
        <StyledGradientButton>추가하기</StyledGradientButton>
      </ModalContainer>
    </ModalBackground>
  );
};

export default AddLink;
