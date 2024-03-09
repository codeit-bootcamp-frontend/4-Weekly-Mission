import styled from "styled-components";

ModalFolderList = ({ folderList, title }) => {
  return (
    <TitleContainer>
      <SubTitle>{title}</SubTitle>
      <FolderCount>{folderList}개 링크</FolderCount>
      <SelectFolderIcon />
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
`;

const SubTitle = styled.p`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const FolderCount = styled.span`
  font-size: 1.4rem;
  line-height: 1.671rem;
  color: var(--gray60);
`;

const SelectFolderIcon = styled.div`
  display: none;
  width: 1.125rem;
  height: 0.95rem;
  background-image: url("../../../../public/images/check.svg");
  position: absolute;
  right: 5.5rem;
`;
