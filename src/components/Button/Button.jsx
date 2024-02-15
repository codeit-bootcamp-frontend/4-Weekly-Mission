import React from "react";
import styles from "./button.module.css"

function Button({ children, disabled, onClick, color, type }) {
  const buttonClasses = `${styles.button} ${styles[color]}`;
  return (
    <button disabled={disabled} onClick={onClick} className={buttonClasses} type={type}>
      {children}
    </button>
  );
}

export default Button;
