import React, { useEffect } from "react";
import "../../css/Delete.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { fetchFolderCardData } from "../Service/ApiService";

function Delete({
  setDeleteFolderModalOpen,
  selectedFolderId,
  folders,
  setFolders,
}) {
  const closeModal = () => {
    setDeleteFolderModalOpen(false);
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
            <div className="AddFolderTitle">폴더 삭제</div>
            <div className="DeleteFolderName">
              {folders?.find((folder) => folder.id === selectedFolderId)?.name}
            </div>
            <button className="DeleteFolderButton">삭제하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delete;
