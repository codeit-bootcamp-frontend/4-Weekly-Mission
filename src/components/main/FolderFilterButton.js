import styles from "./FolderFilterButton.module.css";

function FolderFilterButton({
  name,
  id,
  setSearchParams,
  buttonIndex,
  isFilterActive,
  setIsFilterActive,
  setIsShowFuncButtonBox,
}) {
  let copy = [...isFilterActive];
  function handleClick() {
    setSearchParams({ folderId: id });
    copy = new Array(isFilterActive.length).fill(false);
    copy[buttonIndex] = true;
    setIsFilterActive([...copy]);
    setIsShowFuncButtonBox(true);
  }

  return (
    <button
      className={styles[`${isFilterActive[buttonIndex]}`]}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

export default FolderFilterButton;
