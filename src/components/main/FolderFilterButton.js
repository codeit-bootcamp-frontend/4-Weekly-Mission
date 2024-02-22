import styles from "./FolderFilterButton.module.css";

function FolderFilterButton({
  name,
  id,

  setIsShowFuncButtonBox,
  setFolderName,
  setFolderId,
  activeFilterId,
  setActiveFilterId,
  isActive,
}) {
  function handleClick() {
    setIsShowFuncButtonBox(true);
    setFolderName(name);
    setFolderId("?folderId=" + id);
    setActiveFilterId(id);
  }
  console.log(isActive);
  return (
    <>
      <button
        className={styles.filter_button}
        onClick={handleClick}
        style={{
          backgroundColor: isActive ? "#6d6afe" : "#fff",
          color: isActive ? "#fff" : "#000",
        }}
      >
        {name}
      </button>
    </>
  );
}

export default FolderFilterButton;
