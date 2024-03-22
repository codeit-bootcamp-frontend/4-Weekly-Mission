import React, { useState, useEffect } from "react";
import FolderCardList from "./FolderCardList";

function FolderList() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/users/1/folders")
      .then((response) => response.json())
      .then((data) => {
        setFolders(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <FolderCardList folders={folders} />
    </div>
  );
}

export default FolderList;
