import React from "react";
import styled from "styled-components";
import FolderCategoryItem from "./FolderCategoryItem";
import FolderAddButton from "./FolderAddButton";

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const FolderCategory = styled.div`
  display: flex;
  gap: 8px;
`;

function FolderCategoriseArea({ folders }) {
  return (
    <Layout>
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
      <FolderAddButton />
    </Layout>
  );
}

export default FolderCategoriseArea;
