import { useEffect, useState } from "react";
import { getFolder } from "../../api";
import "./index.css";
import { FolderResponse, Owner } from "../../types/interface";

const Profile = () => {
  const [folderData, setFolderData] = useState<FolderResponse | null>(null);
  const [owner, setOwner] = useState<Owner | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folderData = await getFolder();
        setFolderData(folderData);
        setOwner(folderData.folder.owner);
      } catch (error) {
        console.error("폴더 데이터 불러오기 실패: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="folder">
      {owner && (
        <div className="user-profile">
          <img src={owner.profileImageSource} alt="프로필 이미지" />
          <span>@{owner.name}</span>
        </div>
      )}
      {folderData && (
        <div className="folder-info">
          <span>{folderData.folder.name}</span>
        </div>
      )}
    </div>
  );
};

export default Profile;
