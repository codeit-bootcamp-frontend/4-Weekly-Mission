import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const FolderButton = (props) => {
  const { folderName, onClick, folderId } = props;
  return (
    <S.NavLink to={`/folder/${folderId}`} style={getFolderStyle}>
      <S.ButtonStyle onClick={() => onClick(folderId)}>
        {" "}
        {folderName}
      </S.ButtonStyle>
    </S.NavLink>
  );
};

export default FolderButton;

const navTheme = {
  foreground: "var(--Linkbrary-primary-color, #6d6afe)",
  background: "white",
};

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
  NavLink: styled(NavLink)`
    ${({ isActive }) =>
      isActive
        ? css`
            color: ${navTheme.background};
            background-color: ${navTheme.foreground};
          `
        : css`
            color: ${navTheme.foreground};
            background-color: ${navTheme.background};
          `}
  `,
};
