import React, { useContext, useState } from 'react';
import Button from '../Button';
import styled from 'styled-components';
import CategoryContext from 'contexts/CategoryContext';
import checkIcon from 'assets/images/modal/check.png';

/**
 *
 * @param {Object} props
 * @param {string} props.subTitle 폴더에 추가할 링크 url
 * @returns
 */
const AddFolderModal = ({ subTitle }) => {
  const folders = useContext(CategoryContext);
  const [isSelected, setIsSelected] = useState({});

  const handleClick = id => {
    setIsSelected(prevState => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <Container>
      <StyledTitle>
        폴더에 추가
        <StyledSubTitle>{subTitle}</StyledSubTitle>
      </StyledTitle>
      <ButtonContainer>
        {folders.data.map(folder => (
          <FolderButton key={folder.id} onClick={() => handleClick(folder.id)}>
            <FlexContainer>
              {folder.name}
              <span>{folder.link.count}개 링크</span>
            </FlexContainer>
            {isSelected[folder.id] && <img src={checkIcon} alt="check icon" />}
          </FolderButton>
        ))}
      </ButtonContainer>
      <Button className="modal">추가하기</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`;
const StyledTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
`;
const StyledSubTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.2rem;
  text-align: center;
  color: ${({ theme }) => theme.gray60};
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const FolderButton = styled.button`
  width: 28rem;
  background: transparent;
  padding: 0.8rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.linkbrary_bg};
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.gray60};
  }
`;
const FlexContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export default AddFolderModal;
