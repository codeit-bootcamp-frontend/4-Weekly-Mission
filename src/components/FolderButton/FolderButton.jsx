import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

function getFolderStyle({ isActive }) {
  return {
    background: isActive ? "var(--Linkbrary-primary-color, #6d6afe)" : "white",
    color: isActive ? "white" : "var(--Linkbrary-primary-color, #6d6afe)",
  };
}

const FolderButton = (props) => {
  const { folderName, onClick, folderId } = props;
  return (
    <NavLink to={`/folder/${folderId}`} style={getFolderStyle}>
      <S.ButtonStyle onClick={() => onClick(folderId)}>
        {" "}
        {folderName}
      </S.ButtonStyle>
    </NavLink>
  );
};

export default FolderButton;

const S = {
  ButtonStyle: styled.button`
    display: flex;
    padding: 6px 10px;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: #fff;
  `,
};
