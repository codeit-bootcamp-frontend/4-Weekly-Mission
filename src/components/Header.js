import { getLinksFolder } from "../apiItem";
import { useEffect, useState } from "react";
import "../css/Header.css";

function Headers() {
  const [folderInfo, setFolderInfo] = useState(null);

  useEffect(() => {
    const headerLinks = async () => {
      try {
        const data = await getLinksFolder();
        setFolderInfo(data);
      } catch (error) {}
    };
    headerLinks();
  }, []);

  if (!folderInfo) {
    return <div>로딩중</div>;
  }

  return (
    <header className="header-main">
      <img
        className="profil-img"
        src={folderInfo.folder.owner.profileImageSource}
        alt="프로필 이미지"
      ></img>
      <h2>{folderInfo.folder.owner.name}</h2>
      <p>{folderInfo.folder.name}</p>
    </header>
  );
}

export default Headers;
