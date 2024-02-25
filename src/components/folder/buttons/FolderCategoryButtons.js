import React from 'react';
import '../../../style/folderContent.css';
import FolderAddButton from './FolderAddButton';

function FolderCategoryButton({ folder, onClick }) {
  return (
    <button className="folder-button" onClick={() => onClick(folder.id)}>
      {folder.name}
    </button>
  );
}

function FolderCategoryButtons({ folders, handleFolderClick, setModalState }) {
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
