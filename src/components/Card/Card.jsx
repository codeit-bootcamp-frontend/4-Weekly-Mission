import React from "react";
import styles from "./card.module.css";
import { noImage } from "assets";
import { formatDate, getTimeDifference } from "utils/helpers/dateUtils";

function Card({ item, onClick }) {
  const { createdAt, created_at, description, imageSource, image_source } = item;
  const cardCreatedAt = createdAt || created_at;
  const cardimageSource = imageSource || image_source;
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.imgWrapper}>
        <img
          src={cardimageSource}
          onError={(e) => {
            e.target.src = noImage;
          }}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.difference}>{getTimeDifference(cardCreatedAt)}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.date}>{formatDate(cardCreatedAt)}</div>
      </div>
    </div>
  );
}

export default Card;
