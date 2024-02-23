import {
  ModalContainer,
  ModalForm,
  CloseButton,
  ModalInfo,
  Title,
  Name,
} from './ModalElements';
import modalCloseIcon from '../../assets/modalColseIcon.svg';
import { useContext } from 'react';
import { ModalContext } from '../../pages/FolderPage/FolderPage';
import styled from 'styled-components';
import { SHARE_BUTTONS } from '../../constants/modalConstants';

function ShareModal() {
  return (
    <ModalContainer>
      <ModalForm>
        <CloseButton>
          <img src={modalCloseIcon} alt="closeButton" />
        </CloseButton>
        <ModalInfo>
          <Title>폴더 공유</Title>
          <Name>폴더명</Name>
        </ModalInfo>
        <ShareSection>
          {SHARE_BUTTONS.map((button) => (
            <Button key={button.id}>
              <ButtonIcon
                src={button.img}
                alt={button.name}
                background={button.background}
              ></ButtonIcon>
              <ButtonName>{button.name}</ButtonName>
            </Button>
          ))}
        </ShareSection>
      </ModalForm>
    </ModalContainer>
  );
}

const ShareSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;
const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  border: none;
  background-color: white;
  cursor: pointer;
`;

const ButtonIcon = styled.img`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 37.333px;
  background: ${(background) => background};
`;

const ButtonName = styled.p`
  color: var(--Linkbrary-gray100, #373740);
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 115.385% */
`;

export default ShareModal;
