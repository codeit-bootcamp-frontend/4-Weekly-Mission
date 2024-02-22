import React, { useEffect } from "react";
import "../../css/AddToFolder.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { fetchFolderCardData } from "../Service/ApiService";

function AddToFolder({
  setAddToFolderModalOpen,
  folders,
  setFolders,
  linkInput,
}) {
  const closeModal = () => {
    setAddToFolderModalOpen(false);
  };

  useEffect(() => {
    const loadFolders = async () => {
      try {
        const folderData = await fetchFolderCardData();
        console.log(folders);
        setFolders(folderData.data); // folderData가 { data: [폴더 목록] } 구조를 가짐
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    };

    loadFolders();
  }, []);

  return (
    <>
      <div className="AddFolderBackground">
        <div className="AddFolderContainer">
          <div className="AddFolderBox">
            <FontAwesomeIcon
              icon={faXmark}
              className="AddFolderX"
              onClick={closeModal}
            />
            <div className="AddFolderTitle">폴더에 추가</div>
            <div className="AddToFolderLink">{linkInput}</div>
            <div className="AddToFolderSmallContainer">
              {folders &&
                folders.map((folder) => (
                  <div key={folder.id} className="AddToFoldersFolderData">
                    {folder.name}
                    <span className="AddToFolderLinkCount">
                      {folder.link.count}개 링크
                    </span>
                  </div>
                ))}
            </div>
            <button className="AddToFolderAddButton">추가하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddToFolder;
