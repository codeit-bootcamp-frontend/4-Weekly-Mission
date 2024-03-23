import { useState } from 'react';
import styled from 'styled-components';
import closeIcon from '../image/close.svg';
import List from './List';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const Container = styled.div`
  display: inline-flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid var(--Stroke-light, #dee2e6);
  background: var(---Gray-White, #fff);
  .close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  width: 280px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  .title {
    color: var(--Linkbrary-gray100, #373740);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 280px;
  min-height: 0;
  overflow-y: auto;
  row-gap: 0.4rem;
  width: 100%;
`;

const Button = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));
  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  cursor: pointer;
`;
function Add({ data, onClose }) {
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const handleFolderClick = (id) => {
    setSelectedFolderId(id);
    console.log(selectedFolderId);
  };

  return (
    <Background>
      <Container>
        <img className="close" alt="closeIcon" src={closeIcon} onClick={onClose}></img>
        <TitleContainer>
          <span className="title">폴더에 추가</span>
        </TitleContainer>
        <ListContainer>
          {data.map((items) => (
            <List
              key={items.id}
              linkName={items.name}
              linkCount={items.count}
              onClick={() => handleFolderClick(items.id)}
              isChecked={selectedFolderId === items.id}
            />
          ))}
        </ListContainer>
        <Button>추가하기</Button>
      </Container>
    </Background>
  );
}

export default Add;
