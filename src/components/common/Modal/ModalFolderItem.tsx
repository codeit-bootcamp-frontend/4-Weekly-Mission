import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 264px;
  border-radius: 8px;
  padding: 8px;
  gap: 8px;
  font-family: Pretendard;
  align-items: center;
  position: relative;
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

interface ModalFolderItemProps {
  folder: any;
  selected: boolean;
  onClick: () => void;
}

function ModalFolderItem({
  folder,
  selected,
  onClick,
}: ModalFolderItemProps) {
  const { name, link } = folder;

  return selected ? (
    <FocusContainer onClick={onClick}>
      <FocusFolderName>{name}</FocusFolderName>
      <FolderLink>{link.count}개 링크</FolderLink>
      <CheckIcon src="/Icons/check.png" alt="check" />
    </FocusContainer>
  ) : (
    <Container onClick={onClick}>
      <FolderName>{name}</FolderName>
      <FolderLink>{link.count}개 링크</FolderLink>
    </Container>
  );
}

export default ModalFolderItem;
