import LinkSearchInput from 'components/SharedPage/main/LinkSearchInput/LinkSearchInput';
import FolderFilterBox from '../FolderFilterBox/FolderFilterBox';
import LinkFuncButtonBox from '../LinkFuncButtonBox/LinkFuncButtonBox';
import styles from './FolderPageMain.module.css';
import AddFolderButtons from '../AddFolderButtons/AddFolderButtons';
import LinkList from '../LinkList/LinkList';
import { useFetch } from '../../../../hooks/useFetch';
import { useState } from 'react';
import useModal from '../../../../hooks/useModal';
import ShareFolderModal from '../../modal/ShareFolderModal/ShareFolderModal';
import RenameFolderNameModal from '../../modal/RenameFolderNameModal/RenameFolderNameModal';
import DeleteFolderModal from '../../modal/DeleteFolderModal/DeleteFolderModal';
import AddFolderModal from '../../modal/AddFolderModal/AddFolderModal';
import AddLinkInFolder from '../../modal/AddLinkInFolder/AddLinkInFolder';

const folderUrl = 'https://bootcamp-api.codeit.kr/api/users/3/folders';

function FolderPageMain({
  isShowAddLinkInFolderModal,
  handleAddLinkInFolderModalClick,
  sharedUrl,
  setSharedUrl,
}) {
  const { data: folderData } = useFetch(folderUrl);
  const [folderName, setFolderName] = useState('');
  const [isShowFuncButotonBox, setIsShowFuncButtonBox] = useState(false);
  const [folderId, setFolderId] = useState('');

  const {
    isShowModal: isShowShareFolderModal,
    handleModalClick: handleShareFolderModalClick,
  } = useModal(false);

  const {
    isShowModal: isShowRenameFolderModal,
    handleModalClick: handleRenameFolderModalClick,
  } = useModal(false);

  const {
    isShowModal: isShowDeleteFolderModal,
    handleModalClick: handleDeleteFolderModalClick,
  } = useModal(false);

  const {
    isShowModal: isShowAddFolderModal,
    handleModalClick: handleAddFolderModalClick,
  } = useModal(false);

  const [FolderModalValue, setFolderModalValue] = useState('');
  const [ShareUrlFolderId, setShareUrlFolderId] = useState('');

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
            setFolderModalValue={setFolderModalValue}
            setShareUrlFolderId={setShareUrlFolderId}
            isShowAddLinkInFolderModal={isShowAddLinkInFolderModal}
            handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
          />
          <AddFolderButtons
            handleAddFolderModalClick={handleAddFolderModalClick}
          />
        </div>
        <div className={styles.folder_title_box}>
          <h1 className={styles.folder_title}>{folderName}</h1>
          {isShowFuncButotonBox && (
            <LinkFuncButtonBox
              handleRenameFolderModalClick={handleRenameFolderModalClick}
              handleDeleteFolderModalClick={handleDeleteFolderModalClick}
              handleShareFolderModalClick={handleShareFolderModalClick}
            />
          )}
        </div>
        <LinkList
          folderId={folderId}
          handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
          setSharedUrl={setSharedUrl}
        />
      </div>

      {isShowShareFolderModal && (
        <ShareFolderModal
          handleShareFolderModalClick={handleShareFolderModalClick}
          FolderModalValue={FolderModalValue}
          ShareUrlFolderId={ShareUrlFolderId}
        />
      )}
      {isShowRenameFolderModal && (
        <RenameFolderNameModal
          handleRenameFolderModalClick={handleRenameFolderModalClick}
          FolderModalValue={FolderModalValue}
        />
      )}
      {isShowDeleteFolderModal && (
        <DeleteFolderModal
          FolderModalValue={FolderModalValue}
          handleDeleteFolderModalClick={handleDeleteFolderModalClick}
        />
      )}
      {isShowAddFolderModal && (
        <AddFolderModal handleAddFolderModalClick={handleAddFolderModalClick} />
      )}
      {isShowAddLinkInFolderModal && (
        <AddLinkInFolder
          handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
          folderData={folderData}
          sharedUrl={sharedUrl}
        />
      )}
    </div>
  );
}

export default FolderPageMain;
