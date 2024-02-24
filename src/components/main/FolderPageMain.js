import LinkSearchInput from './LinkSearchInput';
import FolderFilterBox from './FolderFilterBox';
import LinkFuncButtonBox from './LinkFuncButtonBox';
import styles from './FolderPageMain.module.css';
import AddFolderButtons from './AddFolderButtons';
import LinkList from './LinkList';
import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react';
import useModal from '../../hooks/useModal';
import RenameFolderNameModal from '../modal/RenameFolderNameModal';

const folderUrl = 'https://bootcamp-api.codeit.kr/api/users/1/folders';

function FolderPageMain() {
  const { data: folderData } = useFetch(folderUrl);
  const [folderName, setFolderName] = useState('');
  const [isShowFuncButotonBox, setIsShowFuncButtonBox] = useState(true);
  const [folderId, setFolderId] = useState('');

  const {
    isShowModal: isShowRenameFolderModal,
    handleModalClick: handleRenameFolderModalClick,
  } = useModal(false);
  const [renameFolderModalValue, setRenameFolderModalValue] = useState('');
  console.log(renameFolderModalValue);
  return (
    <div className={styles.main_wrapper}>
      <LinkSearchInput />
      <div className={styles.folder_page_content_wrapper}>
        <div className={styles.folder_filter_wrapper}>
          <FolderFilterBox
            folderData={folderData}
            setFolderName={setFolderName}
            setIsShowFuncButtonBox={setIsShowFuncButtonBox}
            isShowFuncButotonBox={isShowFuncButotonBox}
            folderId={folderData}
            setFolderId={setFolderId}
            setRenameFolderModalValue={setRenameFolderModalValue}
          />
          <AddFolderButtons />
        </div>
        <div className={styles.folder_title_box}>
          <h1 className={styles.folder_title}>{folderName}</h1>
          {isShowFuncButotonBox && (
            <LinkFuncButtonBox
              isShowRenameFolderModal={isShowRenameFolderModal}
              handleRenameFolderModalClick={handleRenameFolderModalClick}
            />
          )}
        </div>
        <LinkList folderId={folderId} />
      </div>
      {isShowRenameFolderModal && (
        <RenameFolderNameModal
          handleRenameFolderModalClick={handleRenameFolderModalClick}
          renameFolderModalValue={renameFolderModalValue}
        />
      )}
    </div>
  );
}

export default FolderPageMain;
