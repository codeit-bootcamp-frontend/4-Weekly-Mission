import React from "react";

function FolderList({ folderData, className, setFolderState }) {
  const { id, name } = folderData;

  return (
    <li
      className={className}
      onClick={() =>
        setFolderState({
          name: name,
          value: id,
        })
      }
    >
      {name}
    </li>
  );
}

export default FolderList;
