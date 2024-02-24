import React, { useState, useEffect } from "react";
import FolderCardList from "./FolderCardList";

function FolderList() {
  const [folderNames, setFolderNames] = useState([]);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/users/1/folders")
      .then((response) => response.json())
      .then((data) => {
        const names = data.data.map((folder) => folder.name);
        setFolderNames(names);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <FolderCardList folderNames={folderNames} />
    </div>
  );
}

export default FolderList;
