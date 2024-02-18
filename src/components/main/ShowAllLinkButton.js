import styles from "./ShowAllLinksButton.module.css";

function ShowAllLinksButton({
  name,
  setFolderName,
  setSearchParams,
  buttonIndex,
  setIsFilterActive,
  isFilterActive,
  setIsShowFuncButtonBox,
}) {
  let copy = [...isFilterActive];

  function handleFilterButtonClick() {
    setFolderName(name);
    setSearchParams({ folderId: "" });
    copy = new Array(isFilterActive.length).fill(false);
    copy[buttonIndex] = true;
    setIsFilterActive([...copy]);
    setIsShowFuncButtonBox(false);
  }

  return (
    <button
      className={styles[`${isFilterActive[buttonIndex]}`]}
      onClick={handleFilterButtonClick}
    >
      {name}
    </button>
  );
}

export default ShowAllLinksButton;
