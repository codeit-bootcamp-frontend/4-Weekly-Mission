import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { fetchFolderCardData, fetchLinks } from "./Service/ApiService";
import { getTimeAgo } from "./utils/getTimeAgo";
import { formatDate } from "./utils/formatDate";
import Nav from "./Nav";
import Footer from "./Footer";
import AddFolder from "./modal/AddFolder";
import "../css/Folder.css";
import Delete from "./modal/Delete";
import Modify from "./modal/Modify";
import Share from "./modal/Share";
import AddToFolder from "./modal/AddToFolder";

function Folder() {
  const [selectedLinks, setSelectedLinks] = useState([]);
  const [folders, setFolders] = useState([]);
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [addFolderModalOpen, setAddFolderModalOpen] = useState(false);
  const [deleteFolderModalOpen, setDeleteFolderModalOpen] = useState(false);
  const [editFolderModalOpen, setEditFolderModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [addToFolderModalOpen, setAddToFolderModalOpen] = useState(false);
  const [linkInput, setLinkInput] = useState("");

  const showAddFolderModal = () => {
    setAddFolderModalOpen(true);
  };

  const showDeleteModal = () => {
    setDeleteFolderModalOpen(true);
  };

  const showEditModal = () => {
    setEditFolderModalOpen(true);
  };

  const showAddToFolderModal = () => {
    setAddToFolderModalOpen(true);
  };

  const showShareModal = () => {
    setShareModalOpen(true);
  };

  // 폴더 목록 불러오기 (전체, 즐겨찾기, 코딩 팁 ...etc)
  useEffect(() => {
    const loadFolders = async () => {
      try {
        const folderData = await fetchFolderCardData();
        setFolders(folderData.data); // folderData가 { data: [폴더 목록] } 구조를 가짐
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    };

    // 선택된 폴더의 링크 데이터 불러오기
    const loadLinksForFolder = async (folderId) => {
      try {
        const linksData = await fetchLinks(folderId);
        setSelectedLinks(linksData.data); // linksData가 { data: [링크 목록] } 구조를 가짐
        setSelectedFolderId(folderId);
      } catch (error) {
        console.error("Error fetching links:", error);
        setSelectedLinks([]); // 에러 발생 시 링크 목록 비우기
      }
    };

    loadFolders();
    loadLinksForFolder();
  }, []);

  return (
    <>
      <Nav />
      <div className="FolderInputBox">
        <input
          className="FolderAddInput"
          placeholder="🔗 링크를 추가해 보세요"
          onChange={(e) => setLinkInput(e.target.value)}
          value={linkInput}
        />
        <button className="FolderAddButton" onClick={showAddToFolderModal}>
          추가하기
        </button>
        {addToFolderModalOpen && (
          <AddToFolder
            setAddToFolderModalOpen={setAddToFolderModalOpen}
            folders={folders}
            setFolders={setFolders}
            linkInput={linkInput}
          />
        )}
      </div>
      <div className="FolderContentBox">
        <input
          className="FolderSearchInput"
          placeholder="🔎 링크를 검색해 보세요."
        />
        <div className="FolderList">
          <button
            key="all"
            className={`FolderListButton ${
              selectedFolderId === null ? "selected" : ""
            }`}
            onClick={() => {
              setSelectedFolderId(null);
            }}
          >
            전체
          </button>
          {folders.map((folder) => (
            <button
              key={folder.id}
              // 선택된 폴더 버튼 배경색만 바꾸기 위해
              className={`FolderListButton ${
                selectedFolderId === folder.id ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedFolderId(folder.id);
              }}
            >
              {folder.name}
            </button>
          ))}
          <button className="FolderAddSmallButton" onClick={showAddFolderModal}>
            폴더 추가 +
          </button>
          {addFolderModalOpen && (
            <AddFolder setAddFolderModalOpen={setAddFolderModalOpen} />
          )}
        </div>
        <div className="FolderSubLine">
          <div className="FolderUsefulTitle">
            {selectedFolderId === null
              ? "전체"
              : folders.find((folder) => folder.id === selectedFolderId)?.name}
          </div>
          <div className="FolderIcons">
            <FontAwesomeIcon icon={faShare} className="FolderIcon" />
            <div className="FolderIconName" onClick={showShareModal}>
              공유
            </div>
            {shareModalOpen && (
              <Share
                setShareModalOpen={setShareModalOpen}
                folders={folders}
                selectedFolderId={selectedFolderId}
                setFolders={setFolders}
              />
            )}
            <FontAwesomeIcon icon={faPen} className="FolderIcon" />
            <div className="FolderIconName" onClick={showEditModal}>
              이름 변경
            </div>
            {editFolderModalOpen && (
              <Modify setEditFolderModalOpen={setEditFolderModalOpen} />
            )}
            <FontAwesomeIcon icon={faTrash} className="FolderIcon" />
            <div className="FolderIconName" onClick={showDeleteModal}>
              삭제
            </div>
            {deleteFolderModalOpen && (
              <Delete
                setDeleteFolderModalOpen={setDeleteFolderModalOpen}
                selectedFolderId={selectedFolderId}
                folders={folders}
                setFolders={setFolders}
              />
            )}
          </div>
        </div>
        <div className="FolderContents">
          <div className="FolderContent">
            {selectedLinks && selectedLinks.length === 0 ? (
              <div className="FolderNoCards">저장된 링크가 없습니다.</div>
            ) : (
              selectedLinks.map((link) => (
                <div key={link.id} className="FolderLinkItem">
                  <a
                    href={link.url}
                    target="_blank"
                    className="FolderGo"
                    rel="noreferrer"
                  >
                    <img
                      src={link.image_source}
                      className="FolderLinkImg"
                      alt="이미지 카드 사진"
                    ></img>
                    <div className="FolderLinkDesc">
                      <div className="FolderTimeDiff">
                        {getTimeAgo(link.created_at)}
                      </div>
                      <div className="FolderDesc">{link.description}</div>
                      <div className="FolderLinkDate">
                        {formatDate(link.created_at)}
                      </div>
                    </div>
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Folder;
