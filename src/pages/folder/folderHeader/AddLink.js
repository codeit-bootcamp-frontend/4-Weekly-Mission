import { useState } from 'react';
import useInput from '../../../utils/hooks/useInput';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/Button';
import linkIcon from '../../../assets/link-icon.png';
import './AddLink.css';

const AddLink = () => {
  const [inputValue, handleInputAddLink] = useInput('');
  const [toggleModal, setToggleModal] = useState(false);

  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <header className='add-link'>
      <div className='add-link-content'>
        <div className='add-link-text'>
          <img className='add-link-img' src={linkIcon} alt='link' />
          <input
            className='add-link-input'
            placeholder='링크를 추가해 보세요'
            type='text'
            value={inputValue}
            onChange={handleInputAddLink}
          />
        </div>
        <Button onClick={handleToggleModal} width='80px' size='fixed'>
          추가하기
        </Button>
      </div>
      {toggleModal && (
        <Modal
          title={'폴더에 추가'}
          btnName={'추가하기'}
          message={inputValue}
          placeholder={'내용 입력'}
          hasInput={false}
          hasButton={true}
          isDelete={false}
          hasList={true}
          onClose={handleToggleModal}
        />
      )}
    </header>
  );
};

export default AddLink;
