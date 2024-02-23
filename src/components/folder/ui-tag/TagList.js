import React from "react";
import Tag from "./Tag";
import styled from "styled-components";

const TagListContainer = styled.div`
  width: 90%;

  display: flex;
  flex-flow: wrap;
  gap: 10px;
`;
const TagList = ({ folders, onClick, currentFolder }) => {
  return (
    <TagListContainer>
      <Tag
        isSelected={currentFolder.id === 1}
        id={1}
        name="전체"
        onClick={onClick}
      >
        전체
      </Tag>
      {folders.map((folder) => {
        return (
          <Tag
            key={folder.id}
            id={folder.id}
            name={folder.name}
            isSelected={currentFolder.id === folder.id}
            onClick={onClick}
          >
            {folder["name"]}
          </Tag>
        );
      })}
    </TagListContainer>
  );
};

export default TagList;
