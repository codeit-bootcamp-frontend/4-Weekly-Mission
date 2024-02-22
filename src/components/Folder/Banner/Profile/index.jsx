/** @jsxImportSource @emotion/react */
import { divStyle, imgWrapperStyle, imgStyle, pStyle, h1Style } from "./styles";
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
