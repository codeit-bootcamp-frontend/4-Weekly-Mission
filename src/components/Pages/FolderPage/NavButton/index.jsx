/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../../../../styles/reset.css";
import "../../../../styles/common.css";
import { btnCss } from "./styles";

const NavButton = ({ title, key, onClick, id }) => {
  return (
    <button key={key} onClick={onClick} css={btnCss} id={id}>
      {title}
    </button>
  );
};
export default NavButton;
