import React from "react";
import { useEffect, useState } from "react";
import "../style/folderComponent.css";
import fetchData from "../api/FetchData";
interface FolderData {
  ownerName: string | null;
  folderName: string | null;
  profileImage: string | null;
}
function FolderComponent() {
  const [folderData, setFolderData] = useState<FolderData>({
    ownerName: null,
    folderName: null,
    profileImage: null,
  });
  useEffect(() => {
    const fetchFolderData = async () => {
      try {
        const data = await fetchData("sample/folder");
        if (data) {
          setFolderData({
            ownerName: data.folder.owner.name,
            folderName: data.folder.name,
            profileImage: data.folder.owner.profileImageSource,
          });
        }
      } catch (e) {
        alert("error" + e);
      }
    };
    fetchFolderData();
  }, []);

  return (
    <div className="folder-container">
      <img
        className="profileImg"
        src={folderData.profileImage ?? ""}
        alt="profileImg"
      ></img>
      <p className="ownerName">{folderData.ownerName}</p>
      <p className="folderName">{folderData.folderName}</p>
    </div>
  );
}
export default FolderComponent;
