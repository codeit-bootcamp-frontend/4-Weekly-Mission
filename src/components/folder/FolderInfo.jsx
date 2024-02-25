import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";
import { FolderContext, FolderIdContext } from "../../pages/Folder";
import FoderOptionMenu from "./FoderOptionMenu";
import { FolderButton } from "./FolderButton";
import FolderTitle from "./FolderTitle";

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: 1199px) {
    width: 704px;
  }

  @media (max-width: 767px) {
    width: 340px;
  }
`;

export const FolderButtonsWrapper = styled.ul`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  width: 100%;

  & button {
    background-color: ${({ $active }) =>
      $active ? "var(--primary)" : "white"};
    color: ${({ $active }) => ($active ? "white" : "var(--primary)")};
    border: 1px solid var(--primary);
    padding: 0 12px;
    height: 35px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
`;

const AddFolderButton = styled.a`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  gap: 3px;

  span {
    display: flex;
    align-items: center;
    color: var(--primary);

    &:last-child {
      font-size: 30px;
      font-weight: 200;
      margin-bottom: 5px;
    }
  }

  @media (max-width: 767px) {
    span {
      color: white;
    }

    background-color: var(--primary);
    width: 130px;
    height: 35px;
    border-radius: 20px;
    position: fixed;
    bottom: 101px;
    left: 50%;
    transform: translate(-50%);
    z-index: 999;
  }
`;

const FolderMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const FolderNameContext = createContext();

const FolderInfo = ({ folders }) => {
  const { folderId: activeFolderId, setFolderId } = useContext(FolderContext);
  const [folderName, setFolderName] = useState("전체");

  return (
    <FolderNameContext.Provider value={{ folderName }}>
      <ButtonsWrapper>
        <FolderButtonsWrapper>
          <FolderButton
            $active={activeFolderId === 0}
            folder={{ id: 0, name: "전체" }}
            activeFolderId={activeFolderId}
            setFolderId={setFolderId}
            setFolderName={setFolderName}
          />
          {folders.map((folder) => {
            return (
              <FolderButton
                $active={activeFolderId === folder.id}
                key={folder.id}
                folder={folder}
                activeFolderId={activeFolderId}
                setFolderId={setFolderId}
                setFolderName={setFolderName}
              />
            );
          })}
        </FolderButtonsWrapper>
        <AddFolderButton>
          <span>폴더 추가</span>
          <span>+</span>
        </AddFolderButton>
      </ButtonsWrapper>

      <FolderMenuWrapper>
        <FolderTitle>{folderName}</FolderTitle>
        <FoderOptionMenu />
      </FolderMenuWrapper>
    </FolderNameContext.Provider>
  );
};

export default FolderInfo;
