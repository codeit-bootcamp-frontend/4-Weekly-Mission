import styles from "./ShowAllLinksButton.module.css";

function ShowAllLinksButton({
  name,
  setFolderName,
  buttonIndex,
  setIsFilterActive,
  isFilterActive,
  setIsShowFuncButtonBox,
  setFolderId,
}) {
  let copy = [...isFilterActive];

  function handleFilterButtonClick() {
    setFolderName(name);
    copy = new Array(isFilterActive.length).fill("");
    copy[buttonIndex] = "_isActive";
    setIsFilterActive([...copy]);
    setIsShowFuncButtonBox(false);
    setFolderId("");
  }

  return (
    <button
      className={styles[`filter_button${copy[buttonIndex]}`]}
      onClick={handleFilterButtonClick}
    >
      {name}
    </button>
  );
}

export default ShowAllLinksButton;
