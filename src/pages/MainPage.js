import React from "react";
import styles from "../styles/MainPage.module.css";

const MainPage = () => {
  const classNames = [styles.sub_section, styles.grid].join(" ");
  return (
    <>
      <section className={styles.mainbg}>
        <div className={styles.content_center + " " + styles.first_section}>
          <p className={styles.maintext}>
            <span className={styles.info}>세상의 모든 정보</span>를<br />
            쉽게 저장하고 관리해 보세요
          </p>
          <a
            href="/signup.html"
            className={styles.addlink + " " + styles.gradient}
          >
            링크 추가하기
          </a>
          <img src="images/main_image.png" />
        </div>
      </section>
      <section className={classNames}>
        <p className={styles.image_main_text + " " + styles.link_color}>
          <span className={styles.grad}>원하는 링크</span>를 저장하세요
        </p>
        <p className={styles.link_sub}>
          나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은
          모든 것을 한 공간에 저장하세요.
        </p>
        <img src="images/link_image.svg" />
      </section>
      <section className={styles.sub_section + " " + styles.grid_reverse}>
        <p className={styles.image_main_text + " " + styles.mng_color}>
          링크를 폴더로 <span className={styles.grad}>관리</span>하세요
        </p>
        <p className={styles.link_sub}>
          나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
        </p>
        <img src="images/folder_image.svg" />
      </section>
      <section className={classNames}>
        <p className={styles.image_main_text + " " + styles.share_color}>
          저장한 링크를 <span className={styles.grad}>공유</span>해 보세요
        </p>
        <p className={styles.link_sub}>
          여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
          쉽고 빠르게 링크를 공유해 보세요.
        </p>
        <img src="images/share_image.svg" />
      </section>
      <section className={styles.sub_section + " " + styles.grid_reverse}>
        <img src="images/search_image.svg" />
        <p className={styles.image_main_text + " " + styles.search_color}>
          저장한 링크를 <span className={styles.grad}>검색</span>해 보세요
        </p>
        <p className={styles.link_sub}>
          중요한 정보들을 검색으로 쉽게 찾아보세요.
        </p>
      </section>
    </>
  );
};

export default MainPage;
