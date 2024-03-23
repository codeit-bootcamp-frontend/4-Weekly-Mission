import React from "react";
import "./deleteModal.css";
import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";

interface Props {
  title: string;
  description: string;
  changeLinkDeleteSelect?: () => void;
  isLinkDeleteSelect?: boolean;
  changeFolderDeleteSelect?: () => void;
  isFolderDeleteSelect?: boolean;
}

function DeleteModal({
  title,
  description,
  changeLinkDeleteSelect,
  isLinkDeleteSelect,
  changeFolderDeleteSelect,
  isFolderDeleteSelect,
}: Props) {
  return (
    <div className="DeleteModal">
      <div className="container">
        <div className="contents">
          <CloseIcon
            className="close-icon"
            onClick={
              (isLinkDeleteSelect && changeLinkDeleteSelect) ||
              (isFolderDeleteSelect && changeFolderDeleteSelect)
            }
          />
          <h1 className="title">{title}</h1>
          <p className="subtitle">{description}</p>
          <button className="button">삭제하기</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
