import styled from 'styled-components';
import {
  ModalContainer,
  ModalForm,
  ModalInfo,
  SubmitButton,
  Title,
  Name,
  CloseButton,
} from './ModalElements';
import modalCloseIcon from '../../assets/modalColseIcon.svg';
import { useContext } from 'react';
import { ModalContext } from '../../pages/FolderPage/FolderPage';

function AddModal() {
  const { handleAddModalClose } = useContext(ModalContext);
  return (
    <ModalContainer>
      <ModalForm>
        <CloseButton onClick={handleAddModalClose}>
          <img src={modalCloseIcon} alt="closeButton" />
        </CloseButton>
        <ModalInfo>
          <Title>폴더에 추가</Title>
          <Name>링크 주소</Name>
        </ModalInfo>
        <FolderList></FolderList>
        <SubmitButton>추가하기</SubmitButton>
      </ModalForm>
    </ModalContainer>
  );
}

const FolderList = styled.div`
  width: 280px;
  height: 172px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
const Folder = styled.button`
  width: 100%;
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: flex-start;
  border: none;
  background: white;
  gap: 8px;
  &:hover {
    border-radius: 8px;
    background: var(--Linkbrary-bg, #f0f6ff);
  }
`;
const FolderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FolderName = styled.span`
  color: var(--Linkbrary-gray100, #373740);

  /* Linkbrary/body1-regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const LinkNumber = styled.span`
  color: var(--Linkbrary-gray60, #9fa6b2);

  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default AddModal;
