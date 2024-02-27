import React, { useState } from 'react';
import {
  LinkContainer,
  LinkInputStyle,
  InputContainer,
  AddButton,
} from './linkInputStyle';
import AddLink from '../LinkModal/AddLink';

const LinkInput = ({ folders }) => {
  const [linkUrl, setLinkUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLinkInputChange = e => {
    setLinkUrl(e.target.value);
  };

  return (
    <LinkContainer>
      <InputContainer>
        <LinkInputStyle
          onChange={handleLinkInputChange}
          placeholder="링크를 추가해 보세요"
          type="text"
        />
        <AddButton onClick={openModal}>추가하기</AddButton>
      </InputContainer>
      {isModalOpen && (
        <AddLink linkUrl={linkUrl} folders={folders} onClose={closeModal} />
      )}
    </LinkContainer>
  );
};

export default LinkInput;
