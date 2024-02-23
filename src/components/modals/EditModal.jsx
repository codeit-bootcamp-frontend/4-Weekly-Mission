import styled from 'styled-components';
import { FOLDER_ADD, FOLDER_RENAME } from '../../constants/modalConstants';
import modalCloseIcon from '../../assets/modalColseIcon.svg';
import { ModalContext } from '../../pages/FolderPage/FolderPage';
import { useContext } from 'react';
import {
  ModalContainer,
  ModalForm,
  CloseButton,
  SubmitButton,
} from './ModalElements';

function EditModal() {
  const { editModalPurpose, handleEditModalClose } = useContext(ModalContext);

  const title = editModalPurpose;
  const buttonText = editModalPurpose === FOLDER_ADD ? '추가하기' : '변경하기';

  return (
    <ModalContainer>
      <ModalForm>
        <Name>{title}</Name>
        <CloseButton onClick={handleEditModalClose}>
          <img src={modalCloseIcon} alt="closeButton" />
        </CloseButton>
        <Input type="text" name={title} placeholder="내용 입력" />

        <SubmitButton>{buttonText}</SubmitButton>
      </ModalForm>
    </ModalContainer>
  );
}

const Name = styled.p`
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Input = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);

  &:focus {
    border-radius: 8px;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-white, #fff);
  }
`;

export default EditModal;
