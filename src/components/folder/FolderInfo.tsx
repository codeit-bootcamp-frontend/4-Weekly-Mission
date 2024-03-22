import React, { FC, createContext, useContext, useState } from "react";
import styled from "styled-components";
import { FolderContext } from "../../pages/Folder";
import FoderOptionMenu from "./FoderOptionMenu";
import { FolderButton } from "./FolderButton";
import FolderTitle from "./FolderTitle";
import ModalWithInput from "../Modal/ModalWithInput";
import ModalBase from "../Modal/ModalBase";
import { createPortal } from "react-dom";
import Backdrop from "../common/Backdrop";

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

export const FolderButtonsWrapper = styled.ul<{ $active?: boolean }>`
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

const AddFolderButton = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
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

export const FolderNameContext = createContext<{ folderName: string }>({
  folderName: "",
});

interface FolderInfoProps {
  folders: { id: number; name: string }[];
}

const FolderInfo: FC<FolderInfoProps> = ({ folders }) => {
  const { folderId: activeFolderId, setFolderId } = useContext(FolderContext);
  const [folderName, setFolderName] = useState("전체");
  const [active, setActive] = useState(false);

  const openModal = () => setActive(true);
  const closeModal = () => setActive(false);

  const ModalInput = ModalWithInput(ModalBase);

  const modal = createPortal(
    <ModalInput isClose={closeModal} title="폴더 추가" btntext="추가하기" />,
    document.getElementById("modal")!
  );
  const backdrop = createPortal(
    <Backdrop isClose={closeModal} />,
    document.getElementById("backdrop")!
  );

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
        <AddFolderButton onClick={openModal}>
          <span>폴더 추가</span>
          <span>+</span>
        </AddFolderButton>
        {active && modal}
        {active && backdrop}
      </ButtonsWrapper>

      <FolderMenuWrapper>
        <FolderTitle>{folderName}</FolderTitle>
        <FoderOptionMenu />
      </FolderMenuWrapper>
    </FolderNameContext.Provider>
  );
};

export default FolderInfo;
