import React, { useEffect } from "react";
import "../../css/Share.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { fetchFolderCardData } from "../Service/ApiService";

function Share({ setShareModalOpen, folders, setFolders, selectedFolderId }) {
  const closeModal = () => {
    setShareModalOpen(false);
  };

  // 클립보드로 링크 복사
  const copyToClipboard = () => {
    const shareUrl = "https://localhost:3000/folder" + selectedFolderId;
    navigator.clipboard.writeText(shareUrl);
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
            <div className="AddFolderTitle">폴더 공유</div>
            <div className="DeleteFolderName">
              {folders?.find((folder) => folder.id === selectedFolderId)?.name}
            </div>
            <div className="ShareButtons">
              <div className="ShareButtonSet">
                <img
                  className="ShareButton"
                  src="images/kakaoFrame.png"
                  alt="kakao"
                />
                <div className="ShareButtonName">카카오톡</div>
              </div>
              <div className="ShareButtonSet">
                <img
                  className="ShareButton"
                  src="images/facebookFrame.png"
                  alt="facebook"
                />
                <div className="ShareButtonName">페이스북</div>
              </div>
              <div className="ShareButtonSet">
                <img
                  className="ShareButton"
                  src="images/linkcopyFrame.png"
                  alt="link-copy"
                  onClick={copyToClipboard}
                />
                <div className="ShareButtonName">링크 복사</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Share;
