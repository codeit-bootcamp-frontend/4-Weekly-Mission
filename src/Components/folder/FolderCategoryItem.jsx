import React, { useState } from "react";
import styled from "styled-components";
import { useFolder } from "../../context/FolderContext";

const DefaultFolder = styled.button`
  padding: 8px 12px 8px 12px;
  background-color: var(--color-white);
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  white-space: nowrap;

  @media (max-width: 767px) {
    padding: 6px 10px;
    font-size: 14px;
  }
`;

const SelectedFolder = styled(DefaultFolder)`
  background-color: var(--primary-color);
  color: white;
`;

const FolderCategoryItem = ({ id, children }) => {
  const { folderFilter, setFolderFilter } = useFolder();

  const onClickHandle = () => {
    // 새로운 값과 기존 값이 동일한지 확인
    if (folderFilter.name === children && folderFilter.id === id) {
      // 동일하다면 '전체'와 null로 업데이트
      setFolderFilter({
        id: null,
        name: "전체",
      });
    } else {
      // 다르다면 새로운 값으로 업데이트
      setFolderFilter({
        id: id,
        name: children,
      });
    }
  };

  return (
    <>
      {setFolderFilter.name === children ? (
        <SelectedFolder onClick={onClickHandle}>
          {children}
        </SelectedFolder>
      ) : (
        <DefaultFolder onClick={onClickHandle}>
          {children}
        </DefaultFolder>
      )}
    </>
  );
};

export default FolderCategoryItem;
