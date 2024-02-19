/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import "../styles/common.css";

const NavButton = ({ title, key, onClick }) => {
  return (
    <button key={key} onClick={onClick} css={btnCss}>
      {title}
    </button>
  );
};
export default NavButton;

const btnCss = css`
  font-size: 16px;
  margin-left: 12px;
  background: var(--Linkbrary-white);
  border: solid 1px var(--Linkbrary-primary-color);
  border-radius: 4px;
  padding: 8px 12px;
`;
