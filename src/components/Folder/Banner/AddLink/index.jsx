/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import LinkAdd from "../../../../utils/LinkAdd";
const AddLink = () => {
  return (
    <div css={divCss}>
      <LinkAdd />
    </div>
  );
};

export default AddLink;

const divCss = css`
  display: flex;
  justify-content: center;
  height: 216px;
`;
