import React from "react";
import styles from "../styles/FolderPage.module.css";
import { formatDate, setBeforeDate } from "../utils/util";

const LinkCardComponent = ({ imgSrc, createdAt, desc }) => {
  const curDate = new Date(createdAt);

  return (
    <div className={styles.folder_card}>
      {imgSrc ? (
        <img src={imgSrc} className={styles.card_img} />
      ) : (
        <img src={"/images/card_no_img.png"} className={styles.card_img} />
      )}
      <div className={styles.card_info}>
        <p className={styles.card_date_before}>{setBeforeDate(curDate)}</p>
        <p className={styles.card_desc}>{desc}</p>
        <p className={styles.card_date}>{formatDate(curDate)}</p>
      </div>
    </div>
  );
};

export default LinkCardComponent;
