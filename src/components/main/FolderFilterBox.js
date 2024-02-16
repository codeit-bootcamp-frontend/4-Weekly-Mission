import styles from "./FolderFilterBox.module.css";
import FolderFilterButton from "./FolderFilterButton";
import ShowAllLinksButton from "./ShowAllLinkButton";
function FolderFilterBox({ folderData, setFolderName, setFolderId, folderId }) {
  return (
    <div className={styles.link_filter_box}>
      <ShowAllLinksButton name="전체" setFolderName={setFolderName} />
      {folderData?.data.map(({ name, id }) => {
        return (
          <FolderFilterButton
            name={name}
            key={id}
            id={id}
            setFolderName={setFolderName}
            folderId={folderId}
            setFolderId={setFolderId}
          />
        );
      })}
    </div>
  );
}

export default FolderFilterBox;
