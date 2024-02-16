/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import api from "../../../utils/api";
import "../../../styles/common.css";

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

const Profile = () => {
  const [ownerImage, setOwnerImage] = useState(null);
  const [ownerName, setOwnerName] = useState(null);
  const [folderName, setFolderName] = useState(null);

  const fetchData = async () => {
    try {
      const result = await api("sample/folder");
      setOwnerImage(result.folder.owner.profileImageSource);
      setOwnerName(result.folder.owner.name);
      setFolderName(result.folder.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div css={imgWrapperStyle}>
        <img src={ownerImage} css={imgStyle} alt="아바타" />
      </div>

      <p css={pStyle}>{ownerName}</p>
      <h1 css={h1Style}>{folderName}</h1>
    </>
  );
};

export default Profile;
