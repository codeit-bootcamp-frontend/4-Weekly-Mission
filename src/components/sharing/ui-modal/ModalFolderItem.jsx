import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  gap: 8px;
  align-items: center;
  position: relative;
  box-sizing: border-box;

  &:focus {
    background-color: var(--color-background);
    color: var(--color-primary);
  }
`;

const FocusContainer = styled(Container)`
  background: var(--Linkbrary-bg, #f0f6ff);
`;

const FolderName = styled.h2`
  color: var(--Linkbrary-gray100, #373740);
  font-size: 16px;
  font-weight: 400;
`;

const FolderLink = styled.p`
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-size: 14px;
  font-weight: 400;
`;

const FocusFolderName = styled(FolderName)`
  color: var(--primary-color, #6d6afe);
`;

const CheckIcon = styled.img`
  position: absolute;
  right: 8px;
`;

function ModalFolderItem({ folder, selected, onClick }) {
  const { name, link } = folder;

  return selected ? (
    <FocusContainer onClick={onClick}>
      <FocusFolderName>{name}</FocusFolderName>
      <FolderLink>{link.count}개 링크</FolderLink>
      <CheckIcon src="/icons/check_icon.svg" alt="check" />
    </FocusContainer>
  ) : (
    <Container onClick={onClick}>
      <FolderName>{name}</FolderName>
      <FolderLink>{link.count}개 링크</FolderLink>
    </Container>
  );
}

export default ModalFolderItem;
