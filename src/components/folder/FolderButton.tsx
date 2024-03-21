import React from "react";
import { FolderButtonsWrapper } from "./FolderInfo";

export const FolderButton = ({
  folder,
  activeFolderId,
  setFolderId,
  setFolderName,
}) => {
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
