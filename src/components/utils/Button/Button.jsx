/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../../../styles/common.css";

const Button = ({ name, size, isLoading }) => {
  return (
    <button
      type="submit"
      css={isLoading ? hideBtnCss : showBtnCss}
      className={`CTA ${size}`}
    >
      {name}
    </button>
  );
};

export default Button;

const hideBtnCss = css`
  display: none;
`;

const showBtnCss = css`
  display: block;
`;
