//더 적합한 컴포넌트 이름이 있을까요?
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Profile from "./Profile";
import "../../../styles/common.css";

const divStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: var(--Linkbrary-bg);
`;

const FolderOwner = () => {
  return (
    <div css={divStyle}>
      <Profile />
    </div>
  );
};

export default FolderOwner;
