import React from 'react';
import styled from 'styled-components';
import close from '../../assets/modal/close.svg';

interface Props {
  onClose: ModalCloseHandler;
}

type ModalCloseHandler = () => void;

const DeleteFolderModal = ({ onClose }: Props) => {
  const handleClose = () => {
    onClose();
  };

  const handleStopEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <ModalContainer onClick={handleClose}>
      <ContentContainer onClick={handleStopEvent}>
        <ModalContent>
          <TitleContent>
            <h2>폴더 삭제</h2>
            <span>폴더명</span>
          </TitleContent>
          <button>삭제하기</button>
        </ModalContent>
        <ModalCloseBtn onClick={handleClose} />
      </ContentContainer>
    </ModalContainer>
  );
};

export default DeleteFolderModal;

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
`;

const ContentContainer = styled.div`
  width: 36rem;
  height: 19.3rem;
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

  & > button {
    width: 28rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.6rem 2rem;
    border-radius: 0.8rem;
    background-color: var(--red);
    color: #f5f5f5;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: normal;
  }
`;

const TitleContent = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;

  & > h2 {
    color: var(--gray100);
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;
  }

  & > span {
    color: var(--gray60);
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.57143;
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
