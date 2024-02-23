import "./style.css";
import { useState } from "react";
import { AddfolderModal } from "../../modals";

export default function FoldersList({
  folders,
  selectedFolder,
  setSelectedFolder,
}) {
  const [isAddfolderModalOpen, setIsAddfolderModalOpen] = useState(false);
  return (
    <div className="folders-list">
      <div className="folders">
        <button
          className={`folder ${selectedFolder.id === null ? "selected" : ""}`}
          onClick={() => {
            setSelectedFolder({ id: null, name: "" });
          }}
        >
          전체
        </button>
        {folders.map((folder) => (
          <button
            key={folder.id}
            className={`folder ${
              selectedFolder?.id === folder.id ? "selected" : ""
            }`}
            onClick={() => {
              setSelectedFolder({ id: folder.id, name: folder.name });
            }}
          >
            {folder.name}
          </button>
        ))}
      </div>
      <button
        className="add-folder"
        onClick={() => setIsAddfolderModalOpen(true)}
      >
        <span>폴더 추가</span> <img src="images/plus.svg" alt="plus" />
      </button>
      {isAddfolderModalOpen && (
        <AddfolderModal onClose={() => setIsAddfolderModalOpen(false)} />
      )}
    </div>
  );
}
