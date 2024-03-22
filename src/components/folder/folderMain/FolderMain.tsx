import FolderTitle from "./folderTitle/FolderTitle";
import FolderButton from "./folderButton/FolderButton";
import FolderListItem from "./folderListItem/FolderListItem";
import { FolderMainProps } from "../../../@types/FolderMain";

function FolderMain({
  handleButtonListItemClick,
  clickedButtonId,
  memoizedAddImgSrc,
  memoizedAddImgAlt,
  isSelectedAll,
  folderListItem,
  folderList,
  folderTitleName,
  filterdFolderListItem,
  handleModal,
  value,
}: FolderMainProps) {
  return (
    <>
      {folderList?.length > 0 ? (
        <>
          <FolderButton
            handleButtonListItemClick={handleButtonListItemClick}
            folderList={folderList}
            clickedButtonId={clickedButtonId}
            memoizedAddImgSrc={memoizedAddImgSrc}
            memoizedAddImgAlt={memoizedAddImgAlt}
            onModal={handleModal}
          />
          <FolderTitle
            folderTitleName={folderTitleName}
            isSelectedAll={isSelectedAll}
            onModal={handleModal}
          />
          <FolderListItem
            filterdFolderListItem={filterdFolderListItem}
            folderListItem={folderListItem}
            onModal={handleModal}
            value={value}
          />
        </>
      ) : (
        <div>저장된 폴더가 없습니다</div>
      )}
    </>
  );
}
export default FolderMain;
