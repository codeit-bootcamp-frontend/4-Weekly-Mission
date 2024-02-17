import styles from "./ShowAllLinksButton.module.css";

function ShowAllLinksButton({ name, setFolderName, setSearchParams }) {
  function handleFilterButtonClick() {
    setFolderName(name);
    setSearchParams({ folderId: "" });
  }

  return (
    <button
      className={styles.show_all_links_button}
      onClick={handleFilterButtonClick}
    >
      {name}
    </button>
  );
}

export default ShowAllLinksButton;
