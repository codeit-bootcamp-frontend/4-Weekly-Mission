import styles from "./AddFolder.module.css";

function AddFolderButton() {
  return (
    <button className={styles.add_folder_button}>
      폴더 추가
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/add_folder_button_icon.svg`}
      />
    </button>
  );
}

export default AddFolderButton;
