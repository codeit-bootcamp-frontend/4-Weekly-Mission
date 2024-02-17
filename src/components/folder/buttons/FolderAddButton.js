import React from 'react';
import folderAddIcon from '../../../images/folderAdd.svg';

const FolderAddButton = () => {
  return (
    <div>
      <button className="folder-add-button">
        <p className="folder-add-text">폴더 추가</p>
        <img className="folder-add" src={folderAddIcon} />
      </button>
    </div>
  );
};

export default FolderAddButton;
