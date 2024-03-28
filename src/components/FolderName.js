import { useEffect } from 'react';
import { getApi } from '../utils/apis';
import './FolderName.css';

const FolderName = ({
  name,
  id,
  userId,
  onClick,
  // setSelectFolder,
  setSelectFolderName,
  selectFolderName,
  // selectFolder,
}) => {
  const handleOnClick = async (userId, folderName, e) => {
    const folderId = e ? e.target.id : 'all';
    setSelectFolderName(folderId);

    const { data } = await getApi(
      `/users/${userId}/links${folderId && '?folderId=' + folderId}`
    );

    onClick(folderName, data);
  };

  useEffect(() => {
    handleOnClick(userId, name);
  }, []);

  return (
    <button
      onClick={(e) => handleOnClick(userId, name, e)}
      className={`folder_button${
        selectFolderName === name ? ' selected_purple' : ''
      }`}
    >
      {name}
    </button>
  );
};

export default FolderName;
