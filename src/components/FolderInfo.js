import { getLinksFolder } from "../api";
import { useEffect, useState } from "react";

function FolderInfo() {
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
    <>
      <img
        className="profil-img"
        src={folderInfo.folder.owner.profileImageSource}
        alt="프로필 이미지"
      ></img>
      <h2>{folderInfo.folder.owner.name}</h2>
      <p>{folderInfo.folder.name}</p>
    </>
  );
}

export default FolderInfo;
