import React from 'react';
import styled from 'styled-components';
import close from '../../assets/modal/close.svg';

const AddFolderModal = ({ onClose }) => {
  const handleClose = () => {
    onClose(false);
  };

  const handleStopEvent = (e) => {
    e.stopPropagation();
  };

  return (
    <ModalContainer onClick={handleClose}>
      <ContentContainer onClick={handleStopEvent}>
        <ModalContent>
          <h2>폴더 추가</h2>
          <InputContent>
            <input placeholder='내용 입력' />
            <button>추가하기</button>
          </InputContent>
        </ModalContent>
        <ModalCloseBtn onClick={handleClose} />
      </ContentContainer>
    </ModalContainer>
  );
};

export default AddFolderModal;

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
`;

const ContentContainer = styled.div`
  width: 36rem;
  height: 23.8rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.2rem 4rem;
  gap: 2.4rem;
  border-radius: 1.5rem;
  border: 0.1rem solid var(--gray20);
  background-color: var(--white);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  & > h2 {
    color: var(--gray100);
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;
  }
`;

const InputContent = styled.div`
  width: 28rem;
  height: 12.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & > input {
    width: 28rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.8rem 1.5rem;
    border-radius: 8px;
    border: 0.1rem solid var(--primary);
    background-color: var(--white);
    color: var(--gray100);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
  }

  & > button {
    width: 28rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.6rem 2rem;
    border-radius: 0.8rem;
    background-image: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    color: #f5f5f5;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: normal;
  }
`;

const ModalCloseBtn = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  background-image: url(${close});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
