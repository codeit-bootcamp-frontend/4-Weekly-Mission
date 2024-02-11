import React from "react";
import styles from "./input.module.css";

function Input() {
  return (
    <div className={styles.container}>
      <form>
        <input type="text" placeholder="링크를 검색해 보세요." className={styles.input} />
      </form>
    </div>
  );
}

export default Input;
