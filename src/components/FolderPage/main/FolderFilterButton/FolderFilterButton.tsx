import styles from './FolderFilterButton.module.css';
import { Dispatch, SetStateAction } from 'react';
interface FolderFilterButtonProps {
  name: string;
  id: string;
  setIsShowFuncButtonBox: Dispatch<SetStateAction<boolean>>;
  setFolderName: Dispatch<SetStateAction<string>>;
  setFolderId: Dispatch<SetStateAction<string>>;
  setActiveFilterId: Dispatch<SetStateAction<string>>;
  isActive: boolean;
  setFolderModalValue: Dispatch<SetStateAction<string>>;
  setShareUrlFolderId: Dispatch<SetStateAction<string>>;
}

function FolderFilterButton({
  name,
  id,
  setIsShowFuncButtonBox,
  setFolderName,
  setFolderId,
  setActiveFilterId,
  isActive,
  setFolderModalValue,
  setShareUrlFolderId,
}: FolderFilterButtonProps) {
  function handleClick() {
    setIsShowFuncButtonBox(true);
    setFolderName(name);
    setFolderId('?folderId=' + id);
    setActiveFilterId(id);
    setFolderModalValue(name);
    setShareUrlFolderId(id);
  }

  return (
    <>
      <button
        className={styles.filter_button}
        onClick={handleClick}
        style={{
          backgroundColor: isActive ? '#6d6afe' : '#fff',
          color: isActive ? '#fff' : '#000',
        }}
      >
        {name}
      </button>
    </>
  );
}

export default FolderFilterButton;
