import { useState } from 'react';
import styles from './FolderFilterBox.module.css';
import FolderFilterButton from '../FolderFilterButton/FolderFilterButton';
import ShowAllLinksButton from '../ShowAllLinkButton/ShowAllLinkButton';

function FolderFilterBox({
  folderData,
  setFolderName,
  setFolderId,
  setIsShowFuncButtonBox,
  setFolderModalValue,
  setShareUrlFolderId,
}) {
  const [activeFilterId, setActiveFilterId] = useState('showAll');

  return (
    <div className={styles.link_filter_box}>
      <ShowAllLinksButton
        name='전체'
        setFolderName={setFolderName}
        setIsShowFuncButtonBox={setIsShowFuncButtonBox}
        setFolderId={setFolderId}
        setActiveFilterId={setActiveFilterId}
        activeFilterId={activeFilterId}
      />

      {folderData?.data.map(({ name, id }) => {
        return (
          <FolderFilterButton
            name={name}
            id={id}
            key={id}
            setFolderName={setFolderName}
            setFolderId={setFolderId}
            setIsShowFuncButtonBox={setIsShowFuncButtonBox}
            activeFilterId={activeFilterId}
            setActiveFilterId={setActiveFilterId}
            isActive={activeFilterId === id}
            setFolderModalValue={setFolderModalValue}
            setShareUrlFolderId={setShareUrlFolderId}
          />
        );
      })}
    </div>
  );
}

export default FolderFilterBox;
