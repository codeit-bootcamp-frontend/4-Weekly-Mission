import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';

import ModalButton from 'components/Common/ModalButton';
import TextInput from 'components/Common/TextInput';
import styles from 'components/Modal/EditFolderNameModal.module.css';
import ModalContainer from 'components/Modal/ModalContainer';

function EditFolderNameModal({ isModalOpen, setIsModalOpen }) {
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
    <ModalContainer isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <p className={titleClasses}>폴더 이름 변경</p>
      <TextInput className={inputClasses} value={inputValue} onChange={handleInputChange} placeholder="내용 입력" />
      <ModalButton className={buttonClasses} text="변경하기" onClick={handleButtonClick} />
    </ModalContainer>
  );
}

EditFolderNameModal.propTypes = {
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
};

EditFolderNameModal.defaultProps = {
  isModalOpen: false,
  setIsModalOpen: null,
};

export default EditFolderNameModal;
