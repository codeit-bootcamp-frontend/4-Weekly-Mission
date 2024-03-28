import React, { Dispatch, SetStateAction } from "react";
import { FolderButtonsWrapper } from "./FolderInfo";

interface Folder {
  id: number;
  name: string;
}

interface FolderButtonProps {
  $active: boolean;
  folder: Folder;
  activeFolderId: number;
  setFolderId: Dispatch<SetStateAction<number>>;
  setFolderName: Dispatch<SetStateAction<string>>;
}

export const FolderButton = ({
  folder,
  activeFolderId,
  setFolderId,
  setFolderName,
}: FolderButtonProps) => {
  const handleFolderClick = () => {
    setFolderId(folder.id);
    setFolderName(folder.name);
  };

  return (
    <li key={folder.id}>
      <FolderButtonsWrapper $active={activeFolderId === folder.id}>
        <button onClick={handleFolderClick}>{folder.name}</button>
      </FolderButtonsWrapper>
    </li>
  );
};
