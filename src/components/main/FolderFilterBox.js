import styles from "./FolderFilterBox.module.css";
import FolderFilterButton from "./FolderFilterButton";
import ShowAllLinksButton from "./ShowAllLinkButton";
function FolderFilterBox({
  folderData,
  setFolderName,
  setFolderId,
  folderId,
  setSearchParams,
}) {
  return (
    <div className={styles.link_filter_box}>
      <ShowAllLinksButton
        name="전체"
        setFolderName={setFolderName}
        setFolderId={setFolderId}
        setSearchParams={setSearchParams}
      />
      {folderData?.data.map(({ name, id }) => {
        return (
          <FolderFilterButton
            name={name}
            key={id}
            id={id}
            setFolderName={setFolderName}
            folderId={folderId}
            setFolderId={setFolderId}
            setSearchParams={setSearchParams}
          />
        );
      })}
    </div>
  );
}

export default FolderFilterBox;
