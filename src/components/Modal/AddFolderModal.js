import classNames from 'classnames';
import { useState } from 'react';

import ModalButton from 'components/Common/ModalButton';
import TextInput from 'components/Common/TextInput';
import styles from 'components/Modal/AddFolderModal.module.css';

import ModalContainer from './ModalContainer';

function AddFolderModal() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 임시 버튼 클릭 이벤트
  const handleButtonClick = () => {
    console.log(inputValue);
  };

  const titleClasses = classNames(styles.title, 'text-color-gray100', 'text-center');
  const inputClasses = classNames(styles.input, 'width-full');
  const buttonClasses = classNames('background-gra-primary', 'width-full');

  return (
    <ModalContainer>
      <p className={titleClasses}>폴더 추가</p>
      <TextInput className={inputClasses} value={inputValue} onChange={handleInputChange} placeholder="내용 입력" />
      <ModalButton className={buttonClasses} text="추가하기" onClick={handleButtonClick} />
    </ModalContainer>
  );
}

export default AddFolderModal;
