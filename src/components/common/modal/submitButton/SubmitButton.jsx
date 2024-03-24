import styles from "./SubmitButton.module.css";

const SubmitButton = ({ className, content }) => (
  <button className={`${styles.button} ${styles[className]}`}>{content}</button>
);

export default SubmitButton;
