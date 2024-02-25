import React, { useEffect } from "react";
import "../../css/Delete.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { fetchLinks } from "../Service/ApiService";

function DeleteLink({
  selectedLinks, // 전체 링크 목록
  selectedLinkId, // 삭제하려는 링크 아이디
  setDeleteLinkModalOpen,
  setSelectedLinks,
  setSelectedFolderId,
}) {
  const closeModal = () => {
    setDeleteLinkModalOpen(false);
  };

  const selectedLink = selectedLinks?.find(
    (link) => link.id === selectedLinkId
  );

  useEffect(() => {
    const loadLinksForFolder = async (folderId) => {
      try {
        const linksData = await fetchLinks(folderId);
        setSelectedLinks(linksData.data); // linksData가 { data: [링크 목록] } 구조를 가짐
        setSelectedFolderId(folderId);
        console.log(linksData);
      } catch (error) {
        console.error("Error fetching links:", error);
        setSelectedLinks([]); // 에러 발생 시 링크 목록 비우기
      }
    };

    loadLinksForFolder();
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
            <div className="AddFolderTitle">링크 삭제</div>
            <div className="DeleteFolderName">
              {/* 삭제하는 링크 주소 데이터 받아오기 */}
              {selectedLink?.url}
            </div>
            <button className="DeleteFolderButton">삭제하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteLink;
