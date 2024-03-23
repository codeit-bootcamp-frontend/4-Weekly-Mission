import React, { Dispatch, SetStateAction } from "react";
import "./FolderMenu.css";
import folderAddButton from "../../assets/folder-add-icon.png";
import { Folder } from "../../pages/FolderPage";

interface Props {
  folders: Folder[];
  getCardsInfo: () => void;
  setFolderId: Dispatch<SetStateAction<number | undefined>>;
  setFolderName: Dispatch<SetStateAction<string | undefined>>;
  setIsAllFolderSelected: Dispatch<SetStateAction<boolean>>;
}

function FolderMenu({
  folders,
  getCardsInfo,
  setFolderId,
  setFolderName,
  setIsAllFolderSelected,
}: Props) {
  const handleWholeFolderClick = () => {
    getCardsInfo();
    setFolderName("");
    setIsAllFolderSelected(true);
  };

  const handleFolderClick = (folderId: number, folderName: string) => {
    setFolderId(folderId);
    setFolderName(folderName);
    setIsAllFolderSelected(false);
  };

  return (
    <div className="FolderMenu">
      <div className="container">
        <div className="folder_container">
          <button
            className="folder_selection_button"
            onClick={handleWholeFolderClick}
          >
            전체
          </button>
          {folders.map((folder) => (
            <button
              className="folder_selection_button"
              key={folder.id}
              onClick={() => handleFolderClick(folder.id, folder.name)}
            >
              {folder.name}
            </button>
          ))}
        </div>
        <button className="folder_add_button">
          <span>폴더 추가</span>
          <img
            className="folder_add_image"
            src={folderAddButton}
            alt="add button"
          />
        </button>
      </div>
    </div>
  );
}

export default FolderMenu;
