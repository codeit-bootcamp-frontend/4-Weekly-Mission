import styles from "./IconTextButton.module.css";

const IconTextButton = ({ iconSource, children }) => {
  return (
    <button className={styles.button}>
      <img className={styles.img} src={iconSource} alt={`${children} 아이콘`} />
      {children}
    </button>
  );
};

export default IconTextButton;
