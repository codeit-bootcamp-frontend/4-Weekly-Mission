import { useState, useEffect } from "react";
import { getFolderInfo } from "../../api/api";
import smileIcon from "../../assets/icons/icon_smile.png";
import styled from "styled-components";

const SharedSection = () => {
  const [folderName, setFolderName] = useState([]);
  const [owner, setOwner] = useState([]);
  const { profileImageSource, name } = owner;

  async function handleLoad() {
    const folderInfo = await getFolderInfo();
    const { name, owner } = folderInfo.folder;
    setFolderName(name);
    setOwner(owner);
  }

  useEffect(() => {
    handleLoad();
    console.log(owner);
  }, []);

  return (
    <section className="codeit-mark-section">
      <OwnerProfile
        src={profileImageSource || smileIcon}
        alt={"smile icon"}
      ></OwnerProfile>
      <span>{name}</span>
      <div id="favorites">
        <h1>{folderName}</h1>
      </div>
    </section>
  );
};

const OwnerProfile = styled.img`
  display: flex;
  justify-content: center;
  width: 60px;
  height: 60px;
  align-items: center;
  border-radius: 47px;
  margin-bottom: 12px;
`;

export default SharedSection;
