import {
  ModalContainer,
  ModalForm,
  CloseButton,
  DeleteButton,
  ModalInfo,
  Title,
  Name,
} from './ModalElements';
import modalCloseIcon from '../../assets/modalColseIcon.svg';
import { useContext } from 'react';
import { ModalContext } from '../../pages/FolderPage/FolderPage';

function DeleteModal() {
  const { deleteModalPurpose, handleDeleteModalClose } =
    useContext(ModalContext);

  const title = deleteModalPurpose.purpose;
  const name = deleteModalPurpose.name;

  return (
    <ModalContainer>
      <ModalForm>
        <CloseButton onClick={handleDeleteModalClose}>
          <img src={modalCloseIcon} alt="closeButton" />
        </CloseButton>
        <ModalInfo>
          <Title>{title}</Title>
          <Name>{name}</Name>
        </ModalInfo>
        <DeleteButton disabled={true}>삭제하기</DeleteButton>
      </ModalForm>
    </ModalContainer>
  );
}

export default DeleteModal;
