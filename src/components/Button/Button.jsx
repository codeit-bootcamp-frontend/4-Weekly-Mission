import styles from "./Button.module.css";

const Button = ({ children, className }) => {
  return <div className={`${styles.Button} ${className}`}>{children}</div>;
};

export default Button;
