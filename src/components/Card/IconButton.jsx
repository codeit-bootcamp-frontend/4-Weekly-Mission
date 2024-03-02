import styles from "./IconButton.module.css";

const IconButton = ({ iconSource, iconAlt, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <img className={styles.icon} src={iconSource} alt={iconAlt} />
    </button>
  );
};

export default IconButton;
