import styles from "./Button.module.css";

const Button = ({ children }) => {
  return <div className={styles.Button}>{children}</div>;
};

export default Button;
