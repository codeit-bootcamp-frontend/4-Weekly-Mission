import styled from 'styled-components';
import addIcon from '../../../assets/addIcon.svg';
import addWhiteIcon from '../../../assets/addWhiteIcon.svg';
import { ModalContext } from '../FolderPage';
import { useContext } from 'react';
import { EDIT_TYPE, FOLDER_ADD } from '../../../constants/modalConstants';

//styled-components로 구현한 폴더추가 버튼입니다.
// 기본 버튼과 모바일 버튼을 따로 구현해서 사용합니다.
function FolderAddButton() {
  const { handleModalOpen } = useContext(ModalContext);
  const handleClick = () => {
    handleModalOpen(EDIT_TYPE, FOLDER_ADD);
  };
  return (
    <StyledButton onClick={handleClick}>
      <span>폴더추가</span>
      <img src={addIcon} alt="addIcon"></img>
    </StyledButton>
  );
}
export function FolderAddButtonMobile() {
  const { handleModalOpen } = useContext(ModalContext);
  const handleClick = () => {
    handleModalOpen(EDIT_TYPE, FOLDER_ADD);
  };
  return (
    <MobileButton onClick={handleClick}>
      <span>폴더추가</span>
      <img src={addWhiteIcon} alt="addIcon"></img>
    </MobileButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;
  background: var(--Linkbrary-white);
  cursor: pointer;

  color: #6d6afe;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileButton = styled.button`
  display: none;
  padding: 8px 24px;
  align-items: flex-start;
  gap: 20px;
  border-radius: 20px;
  border: 1px solid var(--Linkbrary-white, #fff);
  background: var(--Linkbrary-primary-color, #6d6afe);

  color: var(--Linkbrary-gray10, #e7effb);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;

  cursor: pointer;

  @media screen and (max-width: 767px) {
    display: flex;
    position: fixed;
    bottom: 6.3125rem;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, 0%);
  }
`;

export default FolderAddButton;
