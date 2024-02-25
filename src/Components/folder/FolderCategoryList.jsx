import React from "react";
import styled from "styled-components";
import FolderCategoryItem from "./FolderCategoryItem";

const FolderCategory = styled.div`
  display: flex;
  gap: 8px;
`;

function FolderCategoryList({ folders }) {
  return (
    <FolderCategory>
      <FolderCategoryItem>전체</FolderCategoryItem>
      {folders
        ? folders.data.map(folder => (
            <FolderCategoryItem key={folder.id}>
              {folder.name}
            </FolderCategoryItem>
          ))
        : ""}
    </FolderCategory>
  );
}

export default FolderCategoryList;
