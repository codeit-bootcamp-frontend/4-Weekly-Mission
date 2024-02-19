import FolderList from "components/FolderList/FolderList";
import CardList from "components/FolderPage/CardList/CardList";
import SearchInput from "components/FolderPage/SearchInput/SearchInput";
import FolderListCtrl from "components/FolderListCtrl/FolderListCtrl";
import styles from "./Main.module.css";

function Main({
  selectedId,
  selectedName,
  links,
  onSelectedFolder,
  loadingError,
  search,
  folderListInfo,
  handleSearchChange,
}) {
  return (
    <>
      {folderListInfo && (
        <FolderList
          onSelectedFolder={onSelectedFolder}
          selectedId={selectedId}
          folders={folderListInfo}
        />
      )}
      <FolderListCtrl folderName={selectedName} />
      <SearchInput
        loadingError={loadingError}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      {links[0] ? (
        <CardList links={links} />
      ) : (
        <div className={styles["noSavedLink"]}>저장된 링크가 없습니다.</div>
      )}
    </>
  );
}

export default Main;
