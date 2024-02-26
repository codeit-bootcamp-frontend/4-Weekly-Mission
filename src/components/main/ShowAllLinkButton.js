import styles from './ShowAllLinksButton.module.css';

function ShowAllLinksButton({
  name,
  setFolderName,
  setIsShowFuncButtonBox,
  setFolderId,
  setActiveFilterId,
  activeFilterId,
}) {
  function handleFilterButtonClick() {
    setFolderName(name);
    setIsShowFuncButtonBox(false);
    setFolderId('');
    setActiveFilterId('showAll');
  }
  const isFilterShowAll = activeFilterId === 'showAll';

  return (
    <button
      className={styles.filter_button}
      onClick={handleFilterButtonClick}
      style={{
        backgroundColor: isFilterShowAll ? '#6d6afe' : '#fff',
        color: isFilterShowAll ? '#fff' : '#000',
      }}
    >
      {name}
    </button>
  );
}

export default ShowAllLinksButton;
