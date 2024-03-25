import React from "react";
import "./EditModal.css";
import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";

interface Props {
  title: string;
  description: string;
  changeFolderAddSelect?: () => void;
  isFolderAddSelect?: boolean;
  changeFolderEditSelect?: () => void;
  isFolderEditSelect?: boolean;
}

function EditModal({
  title,
  description,
  changeFolderAddSelect,
  isFolderAddSelect,
  changeFolderEditSelect,
  isFolderEditSelect,
}: Props) {
  return (
    <div className="EditModal">
      <div className="container">
        <div className="contents">
          <CloseIcon
            className="close-icon"
            onClick={
              (isFolderAddSelect && changeFolderAddSelect) ||
              (isFolderEditSelect && changeFolderEditSelect)
            }
          />
          <h1 className="title">{title}</h1>
          <input
            className="folder_edit_input"
            placeholder="내용을 입력해주세요."
          />
          <button className="button">{description}</button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
