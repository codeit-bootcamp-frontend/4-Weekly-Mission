/** @jsxImportSource @emotion/react */
import "../../../../styles/reset.css";
import "../../../../styles/common.css";
import { divCss, imgCss, inputCss } from "./styles";
import linkImg from "../../../../assets/link.png";
import Button from "../../../utils/Button/Button";

const AddLink = () => {
  return (
    <div css={divCss}>
      <form>
        <img src={linkImg} css={imgCss} />
        <input css={inputCss} placeholder="링크를 추가해 보세요"></input>
        <Button name="추가하기" className="small" isLoading={false} />
      </form>
    </div>
  );
};
export default AddLink;
