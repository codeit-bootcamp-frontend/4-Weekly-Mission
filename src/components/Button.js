import styles from "./css/Button.module.css";

const Button = ({ children, className = null }) => {
  return (
    <button className={`${className} ${styles.Button}`}>{children}</button>
  );
};

export default Button;
