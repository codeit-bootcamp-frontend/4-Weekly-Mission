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
        <div
          className={`folder ${selectedFolder.id === null ? "selected" : ""}`}
          onClick={() => {
            setSelectedFolder({ id: null, name: "" });
          }}
        >
          전체
        </div>
        {folders.map((folder) => (
          <div
            key={folder.id}
            className={`folder ${
              selectedFolder?.id === folder.id ? "selected" : ""
            }`}
            onClick={() => {
              setSelectedFolder({ id: folder.id, name: folder.name });
            }}
          >
            {folder.name}
          </div>
        ))}
      </div>
      <div className="add-folder" onClick={() => setIsAddfolderModalOpen(true)}>
        <span>폴더 추가</span> <img src="images/plus.svg" alt="plus" />
      </div>
      {isAddfolderModalOpen && (
        <AddfolderModal onClose={() => setIsAddfolderModalOpen(false)} />
      )}
    </div>
  );
}
