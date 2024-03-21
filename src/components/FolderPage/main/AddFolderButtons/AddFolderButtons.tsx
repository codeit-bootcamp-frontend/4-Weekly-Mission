import styles from './AddFolderButtons.module.css';
interface AddFolderButtonProps {
  handleAddFolderModalClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
function AddFolderButton({ handleAddFolderModalClick }: AddFolderButtonProps) {
  return (
    <>
      <button
        className={styles.add_folder_button}
        onClick={handleAddFolderModalClick}
      >
        폴더 추가
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/add_folder_button_icon.svg`}
          alt='add_folder_button_icon'
        />
      </button>
      <button
        className={styles.add_folder_floating_buttton}
        onClick={handleAddFolderModalClick}
      >
        폴더 추가
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/add_folder_floating_button_icon.svg`}
          alt='add_folder_floating_button_icon'
        />
      </button>
    </>
  );
}

export default AddFolderButton;
