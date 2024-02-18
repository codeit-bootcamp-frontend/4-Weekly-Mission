import { useEffect, useState } from "react";
<<<<<<< HEAD
import "../style/foldercomponent.css";
import fetchData from "../api/FetchData";
function Folder() {
=======
import "../style/folderComponent.css";
function FolderComponent() {
>>>>>>> d1912a80bace889db0573732226821ff3e7f4a22
  const [folderData, setFolderData] = useState({
    ownerName: null,
    folderName: null,
    profileImage: null,
  });
  useEffect(() => {
<<<<<<< HEAD
    const fetchFolderData = async () => {
      try {
        const data = await fetchData("sample/folder");
        if (data) {
=======
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder",
        );
        const data = await response.json();
        if (response.ok) {
>>>>>>> d1912a80bace889db0573732226821ff3e7f4a22
          setFolderData({
            ownerName: data.folder.owner.name,
            folderName: data.folder.name,
            profileImage: data.folder.owner.profileImageSource,
          });
        }
      } catch (e) {
        console.error(e);
<<<<<<< HEAD
        alert("error", e);
      }
    };

    fetchFolderData();
=======
      }
    };
    fetchData();
>>>>>>> d1912a80bace889db0573732226821ff3e7f4a22
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
<<<<<<< HEAD
export default Folder;
=======
export default FolderComponent;
>>>>>>> d1912a80bace889db0573732226821ff3e7f4a22
