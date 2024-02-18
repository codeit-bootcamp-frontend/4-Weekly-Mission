import { useState, useRef } from 'react';
import { getLinks } from '../utils/apis';
import './FolderNames.css';

const FolderNames = ({ name, id, select, userId, onClick }) => {
  const nameRef = useRef();

  const handleOnClick = async (userId, id, folderName, e) => {
    console.log(e.target.className);

    const { data } = await getLinks(userId, id);

    onClick(folderName, data);
  };

  return (
    <button
      ref={nameRef}
      onClick={(e) => handleOnClick(userId, id, name, e)}
      className={'folder_button '}
      id={id}
    >
      {name}
    </button>
  );
};

export default FolderNames;
