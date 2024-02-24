import styles from './LinkFuncButton.module.css';

function LinkFuncButton({
  buttonName,
  buttonImageSourceName,
  handleRenameFolderModalClick,
  handleDeleteFolderModalClick,
}) {
  return (
    <button
      className={styles.link_func_button}
      onClick={() => {
        if (buttonName === '이름 변경') {
          handleRenameFolderModalClick();
        } else if (buttonName === '삭제') {
          handleDeleteFolderModalClick();
        }
      }}
    >
      {buttonName}
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/${buttonImageSourceName}_button_icon.svg`}
        alt='link_func_button'
      />
    </button>
  );
}

export default LinkFuncButton;
