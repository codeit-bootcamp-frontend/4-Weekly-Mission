import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getFolders } from "../../../utils/api";
import ModalFolderItem from "./ModalFolderItem";

const FolderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
`;

function ModalFolderList() {
  const [folders, setFolders] = useState(null);
  const [currentFolder, setCurrentFolder] = useState(1);
  const handleClickTag = (e, folder) => {
    setCurrentFolder(folder.id);
  };
  const loadFolders = async () => {
    const folderInfo = await getFolders();
    if (!folderInfo) return;
    setFolders(folderInfo["data"]);
  };
  console.log(folders);

  useEffect(() => {
    loadFolders();
  }, []);
  return (
    <>
      {folders && (
        <FolderList>
          {folders.map((folder) => (
            <ModalFolderItem
              folder={folder}
              onClick={(e) => handleClickTag(e, folder)}
              selected={currentFolder === folder.id}
            />
          ))}
        </FolderList>
      )}
    </>
  );
}

export default ModalFolderList;
