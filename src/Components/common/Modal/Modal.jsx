import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../ui/Button";
import SocialIcons from "./SocialIcons";
import ModalFolderItem from "./ModalFolderItem";

const ModalContainer = styled.div`
  width: 360px;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
  position: relative;
`;

const Title = styled.h1`
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
`;

const CloseButton = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 280px;
  padding: 18px 15px 18px 15px;
  border-radius: 8px;
  border: 1px solid var(--gray-color-b);
`;

const SubTitle = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: var(--gray-color-b);
`;

const FolderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

function Modal({
  children,
  input,
  subTitle,
  social,
  button,
  folders,
}) {
  const [currentFolder, setCurrentFolder] = useState({
    id: 1,
    name: "전체",
  });

  const handleClickTag = (e, folder) => {
    setCurrentFolder({ id: folder.id, name: folder.name });
  };

  return (
    <ModalContainer>
      <CloseButton src="/Icons/close.png"></CloseButton>
      <Title>{children}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      {input && <Input placeholder={input} />}
      {social && <SocialIcons />}
      {button && <Button buttonStyle={`blue`}>{button}</Button>}
      {folders && (
        <FolderList>
          {folders.data.map(folder => (
            <ModalFolderItem
              folder={folder}
              onClick={e => handleClickTag(e, folder)}
              selected={currentFolder.id === folder.id}
            />
          ))}
        </FolderList>
      )}
    </ModalContainer>
  );
}
export default Modal;
