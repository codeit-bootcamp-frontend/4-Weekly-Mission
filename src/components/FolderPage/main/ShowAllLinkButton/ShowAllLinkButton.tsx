import styles from './ShowAllLinksButton.module.css';
import { Dispatch, SetStateAction } from 'react';

interface ShowAllLinksButtonProps {
  name: string;
  setFolderName: Dispatch<SetStateAction<string>>;
  setIsShowFuncButtonBox: Dispatch<SetStateAction<boolean>>;
  setFolderId: Dispatch<SetStateAction<string>>;
  setActiveFilterId: Dispatch<SetStateAction<string>>;
  activeFilterId: string;
}

function ShowAllLinksButton({
  name,
  setFolderName,
  setIsShowFuncButtonBox,
  setFolderId,
  setActiveFilterId,
  activeFilterId,
}: ShowAllLinksButtonProps) {
  function handleFilterButtonClick() {
    setFolderName(name);
    setIsShowFuncButtonBox(false);
    setFolderId('');
    setActiveFilterId('showAll');
  }
  const isFilterShowAll = activeFilterId === 'showAll';

  return (
    <button
      className={styles.filter_button}
      onClick={handleFilterButtonClick}
      style={{
        backgroundColor: isFilterShowAll ? '#6d6afe' : '#fff',
        color: isFilterShowAll ? '#fff' : '#000',
      }}
    >
      {name}
    </button>
  );
}

export default ShowAllLinksButton;
