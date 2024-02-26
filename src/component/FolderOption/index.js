import styled from "styled-components";
import shareIcon from "../../images/shareIcon.svg";
import penIcon from "../../images/penIcon.svg";
import deleteIcon from "../../images/deleteIcon.svg";
import { useState } from "react";
import EditFolderNameModal from "../EditFolderNameModal";
import ShareFolderModal from "../ShareFolderModal";
import DeleteFolderModal from "../DeleteFolderModal";

const FolderOptions = styled.div`
  display: flex;

  img {
    width: 18px;
    height: 18px;
  }
  button {
    background: none;
    border: none;
    color: #9fa6b2;

    display: flex;
    gap: 4px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const FolderOption = ({ selectedFolder }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [shareFolderModalOpen, setShareFolderModalOpen] = useState(false);
  const [deleteFolderModalOpen, setDeleteFolderModalOpen] = useState(false);

  const handleClick = (e) => {
    const ID = e.target.id;
    if (ID === "share") setShareFolderModalOpen(true);
    if (ID === "editName") setEditModalOpen(true);
    if (ID === "delete") setDeleteFolderModalOpen(true);
  };

  return (
    <>
      {selectedFolder.id !== "ALL" && (
        <FolderOptions>
          <button onClick={handleClick} id="share">
            <img src={shareIcon} alt="공유 버튼 이미지" />
            공유
          </button>
          <button onClick={handleClick} id="editName">
            <img src={penIcon} alt="이름 변경 버튼 이미지" />
            이름 변경
          </button>
          <button onClick={handleClick} id="delete">
            <img src={deleteIcon} alt="삭제 버튼 이미지" />
            삭제
          </button>
        </FolderOptions>
      )}
      {shareFolderModalOpen && (
        <ShareFolderModal
          setShareFolderModalOpen={setShareFolderModalOpen}
          selectedFolder={selectedFolder}
        />
      )}
      {editModalOpen && (
        <EditFolderNameModal
          setEditModalOpen={setEditModalOpen}
          selectedFolder={selectedFolder}
        />
      )}
      {deleteFolderModalOpen && (
        <DeleteFolderModal
          setDeleteFolderModalOpen={setDeleteFolderModalOpen}
          selectedFolder={selectedFolder}
        />
      )}
    </>
  );
};

export default FolderOption;
