import styles from "./ShowAllLinksButton.module.css";

function ShowAllLinksButton({ name, setFolderName }) {
  function handleFilterButtonClick() {
    setFolderName(name);
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
