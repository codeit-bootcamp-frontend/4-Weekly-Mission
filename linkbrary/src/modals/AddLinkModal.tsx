import React from "react";
import styled from "styled-components";

interface Menu {
  id: string;
  name: string;
}

interface AddLinkModalProps {
  folderData?: Menu[];
  folderMenus?: Menu[];
}

const AddLinkModal: React.FC<AddLinkModalProps> = ({
  folderData,
  folderMenus,
}) => {
  const menusDataArray = folderMenus || [];
  const dataArray = folderData || [];
  return (
    <AddLink>
      <AddArea>링크 주소</AddArea>
      <AddFolderList>
        {menusDataArray.map((menu) => (
          <AddFolderItem key={menu.id}>
            <AddFolderName>{menu.name}</AddFolderName>
            <AddFolderLink>{dataArray.length}개 링크</AddFolderLink>
          </AddFolderItem>
        ))}
      </AddFolderList>
      <AddButton>추가하기</AddButton>
    </AddLink>
  );
};

const AddLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  gap: 1.5rem;
`;

const AddArea = styled.div`
  color: #9fa6b2;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
`;

const AddFolderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: scroll;
  height: 172px;
`;

const AddFolderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  height: 40px;
  gap: 8px;

  &:hover {
    background: #f0f6ff;
  }
`;

const AddFolderName = styled.p`
  display: flex;
  font-size: 16px;
`;

const AddFolderLink = styled.p`
  display: flex;
  color: #9fa6b2;
  font-size: 14px;
`;

const AddButton = styled.button`
  display: flex;
  width: 280px;
  height: 51px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export default AddLinkModal;
