import React from "react";
import styles from "./css/Card.module.css";
import { formatDate, formatDateAgo } from "../../utils/DateUtils";

function Card({
  id,
  createdAt,
  description,
  imageSource = null,
  title,
  url,
}) {
  const cardDate = formatDate(createdAt);
  const cardCreatedAt = formatDateAgo(createdAt);
  return (
    <div key={id} className={styles.card_container}>
      <div className={styles.card_iamgeBox}>
        {imageSource ? (
          <img
            className={styles.card_iamgeBox_image}
            src={imageSource}
            alt="card_Image"
          />
        ) : (
          <img
            className={styles.card_iamgeBox_image}
            src="/Images/default.png"
            alt="card_Image"
          />
        )}
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
