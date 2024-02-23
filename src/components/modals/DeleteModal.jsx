import styled from 'styled-components';
import {
  ModalContainer,
  ModalForm,
  CloseButton,
  DeleteButton,
} from './ModalElements';
import modalCloseIcon from '../../assets/modalColseIcon.svg';
import { FOLDER_DELETE } from '../../constants/modalPurpose';
import { useContext } from 'react';
import { ModalContext } from '../../pages/FolderPage/FolderPage';

function DeleteModal() {
  const { deleteModalPurpose, deleteModalIsOpen, handleDeleteModalClose } =
    useContext(ModalContext);

  const title = deleteModalPurpose.purpose;
  const name = deleteModalPurpose.folderName;

  return (
    <ModalContainer $isOpen={deleteModalIsOpen}>
      <ModalForm>
        <CloseButton onClick={handleDeleteModalClose}>
          <img src={modalCloseIcon} alt="closeButton" />
        </CloseButton>
        <ModalInfo>
          <Title>{title}</Title>
          <Name>{name}</Name>
        </ModalInfo>
        <DeleteButton>삭제하기</DeleteButton>
      </ModalForm>
    </ModalContainer>
  );
}

const ModalInfo = styled.div`
  display: flex;
  width: 280px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

const Title = styled.p`
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Name = styled.p`
  color: var(--Linkbrary-gray60, #9fa6b2);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
`;
export default DeleteModal;
