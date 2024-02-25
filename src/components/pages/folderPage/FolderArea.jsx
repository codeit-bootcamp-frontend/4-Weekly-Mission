import FolderListArea from './FolderListArea';
import LinkList from './LinkList';

const FolderArea = ({
  folders,
  selectedFolder,
  folderId,
  handleCurrentFolder,
  handleModalBtnClick,
  changeSelectedLink,
}) => (
  <>
    <FolderListArea
      folders={folders}
      selectedFolder={selectedFolder}
      handleCurrentFolder={handleCurrentFolder}
      handleModalBtnClick={handleModalBtnClick}
    />
    <LinkList
      folderId={folderId}
      selectedFolder={selectedFolder}
      handleModalBtnClick={handleModalBtnClick}
      changeSelectedLink={changeSelectedLink}
    />
  </>
);

export default FolderArea;
