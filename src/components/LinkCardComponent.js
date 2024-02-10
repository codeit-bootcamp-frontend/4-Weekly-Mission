import React from "react";
import styles from "../styles/FolderPage.module.css";
import { formatDate, setBeforeDate } from "../utils/util";

const LinkCardComponent = ({ imgSrc, createdAt, desc }) => {
  const curDate = new Date(createdAt);
  const noImage = "/images/card_no_img.png";
  return (
    <div className={styles.folder_card}>
      <img src={imgSrc ?? noImage} className={styles.card_img} />
      <div className={styles.card_info}>
        <p className={styles.card_date_before}>{setBeforeDate(curDate)}</p>
        <p className={styles.card_desc}>{desc}</p>
        <p className={styles.card_date}>{formatDate(curDate)}</p>
      </div>
    </div>
  );
};

export default LinkCardComponent;
