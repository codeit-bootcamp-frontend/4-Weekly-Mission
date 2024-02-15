import { useEffect, useState } from "react";
import { getFolder } from "./Api";
import "./styles/Header.css";

function Header() {
  const [folderData, setFolderData] = useState({
    folderName: "",
    profileName: "",
    profileImg: "",
  });

  useEffect(() => {
    const getFolderData = async () => {
      try {
        const profile = await getFolder();
        setFolderData({
          folderName: profile.folder.name,
          profileName: profile.folder.owner.name,
          profileImg: profile.folder.owner.profileImageSource,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getFolderData();
  }, []);

  return (
    <div className="Header">
      <div className="headerProfileBox">
        <img
          className="headerProfileImg"
          src={folderData.profileImg}
          alt="프로필 이미지"
        />
        <p className="profileName">@{folderData.profileName}</p>
      </div>
      <h1 className="folderName">{folderData.folderName}</h1>
    </div>
  );
}

export default Header;
