import { useEffect, useState } from "react";
import "../style/folder.css";
function Folder() {
  const [folderData, setFolderData] = useState({
    ownerName: null,
    folderName: null,
    profileImage: null,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder",
        );
        const data = await response.json();
        if (response.ok) {
          setFolderData({
            ownerName: data.folder.owner.name,
            folderName: data.folder.name,
            profileImage: data.folder.owner.profileImageSource,
          });
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="folder-container">
      <img
        className="profileImg"
        src={folderData.profileImage}
        alt="profileImg"
      ></img>
      <p className="ownerName">{folderData.ownerName}</p>
      <p className="folderName">{folderData.folderName}</p>
    </div>
  );
}
export default Folder;
