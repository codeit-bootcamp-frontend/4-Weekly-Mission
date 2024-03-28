import { SetStateAction, useState, Dispatch } from 'react';
import styles from './FolderFilterBox.module.css';
import FolderFilterButton from '../FolderFilterButton/FolderFilterButton';
import ShowAllLinksButton from '../ShowAllLinkButton/ShowAllLinkButton';
import { FolderData } from 'types/FolderPage/FolderDataType';

interface FolderFilterBoxProps {
  folderData: FolderData | null;
  setFolderName: Dispatch<SetStateAction<string>>;
  setFolderId: Dispatch<SetStateAction<string>>;
  setIsShowFuncButtonBox: Dispatch<SetStateAction<boolean>>;
  setFolderModalValue: Dispatch<SetStateAction<string>>;
  setShareUrlFolderId: Dispatch<SetStateAction<string>>;
}

function FolderFilterBox({
  folderData,
  setFolderName,
  setFolderId,
  setIsShowFuncButtonBox,
  setFolderModalValue,
  setShareUrlFolderId,
}: FolderFilterBoxProps) {
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
            id={String(id)}
            key={id}
            setFolderName={setFolderName}
            setFolderId={setFolderId}
            setIsShowFuncButtonBox={setIsShowFuncButtonBox}
            setActiveFilterId={setActiveFilterId}
            isActive={activeFilterId === String(id)}
            setFolderModalValue={setFolderModalValue}
            setShareUrlFolderId={setShareUrlFolderId}
          />
        );
      })}
    </div>
  );
}

export default FolderFilterBox;
