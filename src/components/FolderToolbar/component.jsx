import { useState } from "react";
import "./style.css";
import { ShareModal, EditModal, DeletefolderModal } from "../../modals";

export default function FolderToolbar({ folder }) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeletefolderModalOpen, setIsDeletefolderModalOpen] = useState(false);

  return (
    <div className="folder-toolbar">
      <span>{folder?.name || "전체"}</span>
      {folder && (
        <div className="folder-options">
          <button
            className="folder-option-item"
            onClick={() => setIsShareModalOpen(true)}
          >
            <img src="images/share.svg" alt="share" />
            공유
          </button>
          {isShareModalOpen && (
            <ShareModal
              folder={folder}
              onClose={() => setIsShareModalOpen(false)}
            />
          )}
          <button
            className="folder-option-item"
            onClick={() => setIsEditModalOpen(true)}
          >
            <img src="images/edit.svg" alt="edit" />
            이름변경
          </button>
          {isEditModalOpen && (
            <EditModal
              folder={folder}
              onClose={() => setIsEditModalOpen(false)}
            />
          )}
          <button
            className="folder-option-item"
            onClick={() => setIsDeletefolderModalOpen(true)}
          >
            <img src="images/delete.svg" alt="delete" />
            삭제
          </button>
          {isDeletefolderModalOpen && (
            <DeletefolderModal
              folder={folder}
              onClose={() => setIsDeletefolderModalOpen(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}
