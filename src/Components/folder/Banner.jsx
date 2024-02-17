import React from "react";
import styles from "./Banner.module.css";
import Wrapper from "../common/layout/Wrapper";

function Banner() {
  return (
    <section className={styles.banner_section}>
      <Wrapper className={styles.banner_container}>
        <div className={styles.banner_input}>
          <img src="/Icons/link.svg" alt="link" />
          <input type="text" placeholder="링크를 추가해 보세요" />
        </div>
        <button>추가하기</button>
      </Wrapper>
    </section>
  );
}

export default Banner;
