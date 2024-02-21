import styled from 'styled-components';
import { FOLDER_ADD, FOLDER_RENAME } from '../../constants/modalPurpose';
import Button from '../Button';
import modalCloseIcon from '../../assets/modalColseIcon.svg';
import { useState } from 'react';

function EditModal({ isOpen, purpose }) {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  let { name, buttonText } = {};
  if (purpose === FOLDER_RENAME) {
    name = FOLDER_RENAME;
    buttonText = '변경하기';
  } else if (purpose === FOLDER_ADD) {
    name = FOLDER_ADD;
    buttonText = '추가하기';
  }

  const buttonProps = {
    width: '280px',
    text: buttonText,
    fontSize: '16px',
    padding: '16px 20px',
  };

  return (
    <ModalContainer $isOpen={modalIsOpen}>
      <ModalForm>
        <Name>{name}</Name>
        <CloseButton onClick={handleModalClose}>
          <img src={modalCloseIcon} alt="closeButton" />
        </CloseButton>
        <Input type="text" name={name} placeholder="내용 입력" />
        <Button type="submit" props={buttonProps} />
      </ModalForm>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
`;

const ModalForm = styled.form`
  position: relative;
  display: inline-flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
`;

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

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  cursor: pointer;
  background-color: white;
`;

export default EditModal;
