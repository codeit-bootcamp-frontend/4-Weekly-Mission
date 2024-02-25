import { useEffect, useRef } from 'react';
import { getApi } from '../utils/apis';
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
    const folderId = e ? e.target.id : 'all';
    setSelectFolder(folderId);

    const { data } = await getApi(
      `/users/${userId}/links${folderId && '?folderId=' + folderId}`
    );

    onClick(folderName, data);
  };

  useEffect(() => {
    handleOnClick(userId, id, name);
  }, []);

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
