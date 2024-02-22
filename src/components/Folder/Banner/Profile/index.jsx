/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import userGetFolder from "../../../../hooks/useGetFolder";
import "../../../../styles/common.css";

const Profile = () => {
  const { ownerData } = userGetFolder();

  return (
    <div css={divStyle}>
      <div css={imgWrapperStyle}>
        <img src={ownerData.ownerImage} css={imgStyle} alt="아바타" />
      </div>

      <p css={pStyle}>{ownerData.ownerName}</p>
      <h1 css={h1Style}>{ownerData.folder}</h1>
    </div>
  );
};

export default Profile;

const divStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: var(--Linkbrary-bg);
`;

const imgWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-bottom: 12px;
`;
const imgStyle = css`
  width: 100%;
  height: 100%;
`;
const pStyle = css`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
`;
const h1Style = css`
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  margin-top: 20px;
  margin-bottom: 60px;
`;
