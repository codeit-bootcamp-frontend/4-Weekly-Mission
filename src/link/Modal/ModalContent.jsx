import styled from "styled-components";
import { ModalContentInput } from "./ModalContentInput";

export const ModalContent = ({ modalText, folderName, id }) => {
  return (
    <ModalName>
      <ModalText>{modalText}</ModalText>
      <FolderName>{folderName}</FolderName>
      <ModalContentInput id={id} />
    </ModalName>
  );
};

const ModalName = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 30px;
`;

const ModalText = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const FolderName = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #9fa6b2;
`;
