import styles from './LinkFuncButton.module.css';

function LinkFuncButton({ buttonName, buttonImageSourceName }) {
  return (
    <button className={styles.link_func_button}>
      {buttonName}
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/${buttonImageSourceName}_button_icon.svg`}
        alt='link_func_button'
      />
    </button>
  );
}

export default LinkFuncButton;
