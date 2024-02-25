import { useState } from 'react';
import { styled } from 'styled-components';

import linkBarIcon from 'assets/icon/linkBar.svg';
import Button from 'components/common/button/Button';
import AddToFolderModal from 'components/folder/modal/AddToFolderModal';

const Styled = {
  Container: styled.div`
    width: 100%;
    padding: 1.6rem 2rem;
    border: 1px solid ${({ theme }) => theme.color.primary};
    border-radius: 1.5rem;
    background-color: ${({ theme }) => theme.color.white};

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
  `,

  Input: styled.input`
    width: calc(100% - 1.6rem - 1.6rem);
    height: 100%;
    border: none;
    background: transparent;

    font-size: 1.6rem;
    line-height: 2.4rem;

    ::placeholder {
      color: ${({ theme }) => theme.color.addition};
    }
  `,
};

function AddLinkBar({ style, placeholder }) {
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (!inputValue) {
      window.alert('링크를 입력해주세요‼️');
      return;
    }
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setInputValue('');
  };

  return (
    <>
      <Styled.Container style={style}>
        <img src={linkBarIcon} alt="링크 추가 바 아이콘" />
        <Styled.Input type="text" value={inputValue} placeholder={placeholder} onChange={handleChange} />
        <Button onClick={handleButtonClick} style={{ padding: '1rem 1.6rem' }}>
          추가하기
        </Button>
      </Styled.Container>
      {isModalOpen && <AddToFolderModal setOpen={setIsModalOpen} onModalClose={handleModalClose} item={inputValue} />}
    </>
  );
}

export default AddLinkBar;
