/** @jsxImportSource @emotion/react */
import "../../../../styles/reset.css";
import "../../../../styles/common.css";
import linkImg from "../../../../assets/link.png";
import { css } from "@emotion/react";
import Button from "../../../Button";

const AddLink = () => {
  return (
    <div css={divCss}>
      <form>
        <img src={linkImg} css={imgCss} />
        <input css={inputCss} placeholder="링크를 추가해 보세요"></input>
        <Button name="추가하기" size="small" isLoading={true} />
      </form>
    </div>
  );
};
export default AddLink;

const divCss = css`
  display: flex;
  justify-content: center;
  height: 216px;
`;
const imgCss = css`
  position: relative;
  left: 32px;
  top: 4px;
`;
const inputCss = css`
  border: solid 4px var(--Linkbrary-gradation);
  outline: 4px solid var(--Linkbrary-gradation);
  width: 800px;
  height: 68px;
  border-radius: 16px;
  padding: 16px 40px;
`;
