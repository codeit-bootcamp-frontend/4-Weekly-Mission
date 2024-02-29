import React, { useState } from 'react';
import styled from 'styled-components';
import close from '../../assets/modal/close.svg';
import check from '../../assets/modal/check.svg';

const AddLinkModal = ({ onClose, folderInfo }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleClose = () => {
    onClose(false);
  };

  const handleStopEvent = (e) => {
    e.stopPropagation();
  };

  const handleLinkFolderClick = (id) => {
    setSelectedItemId(id === selectedItemId ? null : id);
  };

  return (
    <ModalContainer onClick={handleClose}>
      <ContentContainer onClick={handleStopEvent}>
        <ModalContent>
          <TitleContent>
            <h2>폴더에 추가</h2>
            <span>링크 주소</span>
          </TitleContent>
          <LinksFolderContent>
            {folderInfo.slice(1).map((item) => (
              <LinkFolderContent
                key={item.id}
                onClick={() => handleLinkFolderClick(item.id)}
                selected={selectedItemId === item.id}
              >
                <FolderContent>
                  <div>{item.name}</div>
                  <span>{item.link.count}개의 링크</span>
                </FolderContent>
              </LinkFolderContent>
            ))}
          </LinksFolderContent>
          <button>추가하기</button>
        </ModalContent>
        <ModalCloseBtn onClick={handleClose} />
      </ContentContainer>
    </ModalContainer>
  );
};

export default AddLinkModal;

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
    background-image: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
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

const LinksFolderContent = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const LinkFolderContent = styled.div`
  width: 26.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  border-radius: 0.8rem;
  background-color: ${(props) => (props.selected ? 'var(--bg)' : '')};
  cursor: pointer;

  &::after {
    content: '';
    display: ${(props) => (props.selected ? 'flex' : 'none')};
    width: 1.4rem;
    height: 1.4rem;
    background-image: url(${check});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const FolderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & > div {
    color: var(--gray100);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
  }

  & > span {
    color: var(--gray60);
    font-size: 1.4rem;
    font-weight: 400;
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
