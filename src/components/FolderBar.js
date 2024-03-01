import { useEffect, useState } from "react";
import { getFolder } from "../api";
import "./FolderBar.css";

export default function FolderBar() {
  const [folderName, setFolderName] = useState("");
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    async function getProFileFolder() {
      try {
        const {
          folder: { name, owner },
        } = await getFolder();
        setFolderName(name);
        setUserName(owner.name);
        setProfileImage(owner.profileImageSource);
      } catch (error) {
        console.error(error);
      }
    }

    getProFileFolder();
  }, []);
  return (
    <div className="FolderBar">
      <div className="user">
        <img id="folderImg" src={profileImage} alt="폴더 이미지"></img>
        <span id="userName">@{userName}</span>
        <span id="folderName">{folderName}</span>
      </div>
    </div>
  );
}
