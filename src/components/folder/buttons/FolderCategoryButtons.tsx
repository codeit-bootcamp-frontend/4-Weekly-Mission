import React from 'react';
import '../../../style/folderContent.css';
import FolderAddButton from './FolderAddButton';

interface Folder {
  id: string;
  name: string;
}

interface FolderCategoryButtonProps {
  folder: Folder;
  onClick: (id: string) => void;
}

const FolderCategoryButton: React.FC<FolderCategoryButtonProps> = ({ folder, onClick }) => {
  return (
    <button className="folder-button" onClick={() => onClick(folder.id)}>
      {folder.name}
    </button>
  );
}

interface FolderCategoryButtonsProps {
  folders: Folder[];
  handleFolderClick: (id: string) => void;
  setModalState: React.Dispatch<React.SetStateAction<{ visibility: boolean; target: string; }>>;
}

const FolderCategoryButtons: React.FC<FolderCategoryButtonsProps> = ({ folders, handleFolderClick, setModalState }) => {
  return (
    <div>
      <div className="folder-box">
        <div className="folder-button-box">
          <button
            className="folder-button"
            onClick={() => handleFolderClick('all')}
          >
            전체
          </button>
          {folders.map((folder) => (
            <FolderCategoryButton
              key={folder.id}
              folder={folder}
              onClick={handleFolderClick}
            />
          ))}
        </div>
        <FolderAddButton setModalState={setModalState} />
      </div>
    </div>
  );
}

export default FolderCategoryButtons;
