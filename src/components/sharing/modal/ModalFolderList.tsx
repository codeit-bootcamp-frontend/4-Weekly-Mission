import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getFolders } from "../../../utils/api";
import ModalFolderItem from "./ModalFolderItem";
import { Folder } from "../../../utils/types";

const FolderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
`;

function ModalFolderList() {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [currentFolder, setCurrentFolder] = useState(1);
  const handleClickTag = (folder: Folder) => {
    setCurrentFolder(folder.id);
  };
  const loadFolders = async () => {
    const folderInfo = await getFolders();
    if (!folderInfo) return;
    setFolders(folderInfo["data"]);
  };

  useEffect(() => {
    loadFolders();
  }, []);

  if (!folders) return <></>;
  return (
    <FolderList>
      {folders.map((folder: Folder) => (
        <ModalFolderItem
          folder={folder}
          onClick={() => handleClickTag(folder)}
          selected={currentFolder === folder.id}
        />
      ))}
    </FolderList>
  );
}

export default ModalFolderList;
