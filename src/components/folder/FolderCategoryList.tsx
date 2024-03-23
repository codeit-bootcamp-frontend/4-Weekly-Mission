import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FolderCategoryItem from "./FolderCategoryItem";
import { getUserFolder } from "utils/Api";

const FolderCategory = styled.div`
  display: flex;
  gap: 8px;
  @media (max-width: 1124px) {
    flex-wrap: wrap;
    max-width: 550px;
  }
`;

function FolderCategoryList() {
  const [folders, setFolders] = useState({
    data: [],
  });

  useEffect(() => {
    getUserFolder().then(setFolders);
  }, []);

  return (
    <FolderCategory>
      {folders.data.map((folder: any) => (
        <FolderCategoryItem key={folder.id} {...folder}>
          {folder.name}
        </FolderCategoryItem>
      ))}
    </FolderCategory>
  );
}

export default FolderCategoryList;
