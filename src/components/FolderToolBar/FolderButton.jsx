import styles from "./FolderButton.module.css";

const FolderButton = ({ children, onClick, isSelected = false }) => {
  const selected = styles.selected;
  return (
    <button
      className={`${styles.button} ${isSelected ? selected : ""}`}
      onClick={onClick}
    >
      <span className={styles.text}>{children}</span>
    </button>
  );
};

export default FolderButton;
