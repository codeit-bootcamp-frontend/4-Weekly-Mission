import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FolderCategoryItem from "./FolderCategoryItem";
import { getUserFolder } from "../../utils/Api";

const FolderCategory = styled.div`
  display: flex;
  gap: 8px;
`;

function FolderCategoryList() {
  const [folders, setFolders] = useState(null);

  useEffect(() => {
    getUserFolder().then(setFolders);
  }, []);

  return (
    <FolderCategory>
      <FolderCategoryItem>전체</FolderCategoryItem>
      {folders
        ? folders.data.map(folder => (
            <FolderCategoryItem key={folder.id} {...folder}>
              {folder.name}
            </FolderCategoryItem>
          ))
        : ""}
    </FolderCategory>
  );
}

export default FolderCategoryList;
