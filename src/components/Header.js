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
        const body = await getFolder();
        setFolderData({
          folderName: body.folder.name,
          profileName: body.folder.owner.name,
          profileImg: body.folder.owner.profileImageSource,
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
