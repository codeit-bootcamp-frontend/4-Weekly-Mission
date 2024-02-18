import styles from "./ShowAllLinksButton.module.css";

function ShowAllLinksButton({
  name,
  setFolderName,
  setSearchParams,
  buttonIndex,
  setIsFilterActive,
  isFilterActive,
  isShowFuncButotonBox,
  setIsShowFuncButtonBox,
}) {
  let copy = [...isFilterActive];

  function handleFilterButtonClick() {
    setFolderName(name);
    setSearchParams({ folderId: "" });
    copy = new Array(isFilterActive.length).fill(false);
    copy[buttonIndex] = true;
    setIsFilterActive([...copy]);
    setIsShowFuncButtonBox(!isShowFuncButotonBox);
  }
  console.log(buttonIndex);
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
