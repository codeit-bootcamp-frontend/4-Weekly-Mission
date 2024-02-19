import { useState, useRef } from 'react';
import { getLinks } from '../utils/apis';
import './FolderNames.css';

const FolderNames = ({
  name,
  id,
  userId,
  onClick,
  setSelectFolder,
  selectFolder,
}) => {
  const nameRef = useRef();

  const handleOnClick = async (userId, id, folderName, e) => {
    setSelectFolder(e.target.id);
    const { data } = await getLinks(userId, id);

    onClick(folderName, data);
  };

  return (
    <button
      ref={nameRef}
      onClick={(e) => handleOnClick(userId, id, name, e)}
      className={`folder_button${selectFolder == id ? ' selected_purple' : ''}`}
      id={id}
    >
      {name}
    </button>
  );
};

export default FolderNames;
