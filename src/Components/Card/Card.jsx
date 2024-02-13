import React from "react";
import styles from "./css/Card.module.css";
import { formatDate, formatDateAgo } from "../../utils/DateUtils";

function Card({ link }) {
  const {
    createdAt,
    description,
    imageSource = "/Images/default.png",
  } = link;
  const cardDate = formatDate(createdAt);
  const cardCreatedAt = formatDateAgo(createdAt);

  return (
    <div className={styles.card_container}>
      <div className={styles.card_iamgeBox}>
        <img
          className={styles.card_iamgeBox_image}
          src={imageSource}
          alt="card_Image"
        />
      </div>
      <div className={styles.card_content}>
        <p className={styles.card_date}>{cardDate}</p>
        <p className={styles.card_description}>{description}</p>
        <p className={styles.card_createdAt}>{cardCreatedAt}</p>
      </div>
    </div>
  );
}

export default Card;
