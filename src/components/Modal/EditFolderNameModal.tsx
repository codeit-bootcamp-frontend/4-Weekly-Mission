import classNames from 'classnames';
import React, { useState } from 'react';

import ModalButton from 'components/Common/ModalButton';
import TextInput from 'components/Common/TextInput';
import styles from 'components/Modal/EditFolderNameModal.module.css';
import ModalContainer from 'components/Modal/ModalContainer';

import { FolderData } from 'services/api';

interface EditFolderNameModalProps {
  folder: FolderData;
  onSubmit: () => void;
  onClose: () => void;
}

function EditFolderNameModal({ folder, onSubmit, onClose }: EditFolderNameModalProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 임시 버튼 클릭 이벤트
  const handleButtonClick = () => {
    if (!inputValue) return null;
    // folder 임시 출력
    console.log(`${folder.name} -> ${inputValue}`);
    return onSubmit();
  };

  const titleClasses = classNames(styles.title, 'text-color-gray100', 'text-center');
  const inputClasses = classNames(styles.input, 'width-full');
  const buttonClasses = classNames('background-gra-primary', 'width-full');

  return (
    <ModalContainer onClose={onClose}>
      <p className={titleClasses}>폴더 이름 변경</p>
      <TextInput className={inputClasses} value={inputValue} onChange={handleInputChange} placeholder="내용 입력" />
      <ModalButton className={buttonClasses} text="변경하기" onClick={handleButtonClick} />
    </ModalContainer>
  );
}

export default EditFolderNameModal;
