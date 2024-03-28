import styles from "./Button.module.css";

const Button = ({ children, className }) => {
  return (
    <button className={`${styles.Button} ${className}`}>{children}</button>
  );
};

export default Button;
