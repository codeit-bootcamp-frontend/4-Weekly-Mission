import styles from "./FolderFilterButton.module.css";

function FolderFilterButton({
  name,
  id,
  buttonIndex,
  isFilterActive,
  setIsFilterActive,
  setIsShowFuncButtonBox,
  setFolderName,
  setFolderId,
}) {
  let copy = [...isFilterActive];
  function handleClick() {
    copy = new Array(isFilterActive.length).fill("");
    copy[buttonIndex] = "_isActive";
    setIsFilterActive([...copy]);
    setIsShowFuncButtonBox(true);
    setFolderName(name);
    setFolderId("?folderId=" + id);
  }

  return (
    <>
      <button
        className={styles[`filter_button${copy[buttonIndex]}`]}
        onClick={handleClick}
      >
        {name}
      </button>
    </>
  );
}

export default FolderFilterButton;
