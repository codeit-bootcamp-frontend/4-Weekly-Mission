import styles from "./FolderFilterButton.module.css";

function FolderFilterButton({ name, id }) {
  return <button className={styles.link_filter_button}>{name}</button>;
}

export default FolderFilterButton;
