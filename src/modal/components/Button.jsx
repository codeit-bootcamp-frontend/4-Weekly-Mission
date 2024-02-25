import styles from "../styles/Button.module.css";

export default function Button({ buttonColor, children }) {
  return (
    <button
      className={`${styles.button} ${
        buttonColor === "blue" ? styles["button--blue"] : styles["button--red"]
      }`}
    >
      {children}
    </button>
  );
}
