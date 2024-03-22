import React from 'react';
import folderAddIcon from '../../../images/folderAdd.svg';

const FolderAddButton = ({ setModalState }) => {
  const handleMenuClick = (e, target) => {
    e.stopPropagation();
    setModalState({
      visibility: true,
      target: target,
    });
  };
  return (
    <div className="folder-add-button-section">
      <button
        className="folder-add-button"
        onClick={(e) => handleMenuClick(e, '폴더 추가')}
      >
        <p className="folder-add-text">폴더 추가</p>
        <img className="folder-add" src={folderAddIcon} />
      </button>
    </div>
  );
};

export default FolderAddButton;
