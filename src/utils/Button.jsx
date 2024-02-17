/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
const hideBtnCss = css`
  display: none;
`;

const showBtnCss = css`
  display: block;
`;

const Button = ({ name, size, isLoading }) => {
  return (
    <button
      type="submit"
      css={!isLoading ? showBtnCss : hideBtnCss}
      className={`CTA ${size}`}
    >
      {name}
    </button>
  );
};

export default Button;
