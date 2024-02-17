import React, { useState } from "react";

function FolderList({ folderData, className, setFolderState }) {
  const { id, name } = folderData;
  const [clicked, setClicked] = useState(false);

  return (
    <li
      className={className}
      onClick={() => setFolderState(name, id)}
    >
      {name}
    </li>
  );
}

export default FolderList;
