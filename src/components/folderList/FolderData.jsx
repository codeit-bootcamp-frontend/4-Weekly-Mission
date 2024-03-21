import React from "react";
import "./FolderData.css";

function FolderData({ name, onClick, selected }) {
  return (
    <li
      className={`folderData ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {name}
    </li>
  );
}

export default FolderData;
