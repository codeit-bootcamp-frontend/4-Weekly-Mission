import React from "react";
import "./FolderCurrentInformation.css";
import shareIcon from "../../assets/share-icon.png";
import editIcon from "../../assets/pencil-icon.png";
import deleteIcon from "../../assets/delete-icon.png";

interface Props {
  folderName: string | undefined;
  isAllFolderSelected: boolean;
  changeFolderDeleteSelect: () => void;
  changeFolderEditSelect: () => void;
  changeFolderShareSelect: () => void;
}

function FolderCurrentInformation({
  folderName,
  isAllFolderSelected,
  changeFolderDeleteSelect,
  changeFolderEditSelect,
  changeFolderShareSelect,
}: Props) {
  return (
    <div className="FolderCurrentInformation">
      <div className="container">
        <div>{folderName}</div>
        {!isAllFolderSelected && (
          <div className="icon_container">
            <div
              className="icon_each_container"
              onClick={changeFolderShareSelect}
            >
              <img className="icon" src={shareIcon} alt="share" />
              공유
            </div>
            <div
              className="icon_each_container"
              onClick={changeFolderEditSelect}
            >
              <img className="icon" src={editIcon} alt="name edit" />
              이름 변경
            </div>
            <div
              className="icon_each_container"
              onClick={changeFolderDeleteSelect}
            >
              <img className="icon" src={deleteIcon} alt="delete" />
              삭제
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FolderCurrentInformation;
