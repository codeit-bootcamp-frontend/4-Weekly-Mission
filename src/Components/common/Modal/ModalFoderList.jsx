import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getUserFolder } from "../../../utils/Api";
import ModalFolderItem from "./ModalFolderItem";

const FolderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

function ModalFoderList() {
  const [folders, setFolders] = useState(null);

  useEffect(() => {
    getUserFolder().then(setFolders);
  }, []);
  return (
    <>
      {folders && (
        <FolderList>
          {folders.data.map(folder => (
            <ModalFolderItem folder={folder} />
          ))}
        </FolderList>
      )}
    </>
  );
}

export default ModalFoderList;
