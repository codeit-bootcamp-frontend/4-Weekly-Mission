import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';

import ModalButton from 'components/Common/ModalButton';
import TextInput from 'components/Common/TextInput';
import styles from 'components/Modal/AddFolderModal.module.css';
import ModalContainer from 'components/Modal/ModalContainer';

function AddFolderModal({ onSubmit, onClose }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 임시 버튼 클릭 이벤트
  const handleButtonClick = () => {
    if (!inputValue) return null;

    console.log(inputValue);
    return onSubmit();
  };

  const titleClasses = classNames(styles.title, 'text-color-gray100', 'text-center');
  const inputClasses = classNames(styles.input, 'width-full');
  const buttonClasses = classNames('background-gra-primary', 'width-full');

  return (
    <ModalContainer onClose={onClose}>
      <p className={titleClasses}>폴더 추가</p>
      <TextInput className={inputClasses} value={inputValue} onChange={handleInputChange} placeholder="내용 입력" />
      <ModalButton className={buttonClasses} text="추가하기" onClick={handleButtonClick} />
    </ModalContainer>
  );
}

AddFolderModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddFolderModal;
