/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import api from "../../../utils/api";
import "../../../styles/common.css";

const Profile = () => {
  const [ownerData, setOwnerData] = useState({
    ownerImage: null,
    ownerName: null,
    ownerFolder: null,
  });

  const fetchData = async () => {
    try {
      const result = await api("sample/folder");
      setOwnerData({
        ownerImage: result.folder.owner.profileImageSource,
        ownerName: result.folder.owner.name,
        ownerFolder: result.folder.name,
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div css={divStyle}>
      <div css={imgWrapperStyle}>
        <img src={ownerData.ownerImage} css={imgStyle} alt="아바타" />
      </div>

      <p css={pStyle}>{ownerData.ownerName}</p>
      <h1 css={h1Style}>{ownerData.ownerFolder}</h1>
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
