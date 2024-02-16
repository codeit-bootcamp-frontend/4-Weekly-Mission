import styles from "./FolderFilterButton.module.css";

function FolderFilterButton({ filterName }) {
  return <button className={styles.link_filter_button}>{filterName}</button>;
}

export default FolderFilterButton;
