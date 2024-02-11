import React from "react";
import styles from "./card.module.css";
import noImage from "../../assets/images/no_image.jpeg"
import { formatDate, getTimeDifference } from "../../utils/helpers/dateUtils";

function Card({ item, onClick}) {
  const { createdAt, description, imageSource, title, url } = item;
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.imgWrapper}>
        <img src={imageSource ?? noImage} className={styles.image}/>
        <div></div>
      </div>
      <div className={styles.info}>
        <div className={styles.difference}>{getTimeDifference(createdAt)}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.date}>{formatDate(createdAt)}</div>
      </div>
    </div>
  );
}

export default Card;
