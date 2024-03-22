import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getUserFolder } from "../../../utils/Api";
import ModalFolderItem from "./ModalFolderItem";

const FolderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

interface FoldersDataType {
  created_at: string;
  favorite: boolean;
  id: number;
  link: {
    count: number;
  };
  name: string;
  user_id: number;
}

function ModalFoderList() {
  const [folders, setFolders] = useState({
    data: [] as FoldersDataType[],
  });
  console.log(folders);
  const [currentFolder, setCurrentFolder] = useState(1);
  const handleClickTag = (folder: any) => {
    setCurrentFolder(folder.id);
  };

  useEffect(() => {
    getUserFolder().then(setFolders);
  }, []);
  return (
    <>
      {folders && (
        <FolderList>
          {folders.data.map(folder => (
            <ModalFolderItem
              key={folder.id}
              folder={folder}
              onClick={() => handleClickTag(folder)}
              selected={currentFolder === folder.id}
            />
          ))}
        </FolderList>
      )}
    </>
  );
}

export default ModalFoderList;
