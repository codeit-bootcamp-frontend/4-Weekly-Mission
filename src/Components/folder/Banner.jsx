import React from "react";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <section className={styles.banner_section}>
      <div className={styles.banner_input}>
        <img src="/Icons/link.svg" alt="link" />
        <input type="text" placeholder="링크를 추가해 보세요" />
      </div>
      <button>추가하기</button>
    </section>
  );
}

export default Banner;
