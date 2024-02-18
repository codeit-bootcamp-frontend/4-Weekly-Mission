import { useEffect, useState } from "react";
import "../style/foldercomponent.css";
import fetchData from "../api/FetchData";
function Folder() {
  const [folderData, setFolderData] = useState({
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
        console.error(e);
        alert("error", e);
      }
    };

    fetchFolderData();
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
