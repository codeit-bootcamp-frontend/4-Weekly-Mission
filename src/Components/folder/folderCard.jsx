import React, { useEffect, useState } from "react";
import { formatDate, formatDateAgo } from "../../utils/DateUtils";
import styles from "./FolderCard.module.css";
import { getFolderLink } from "../../utils/Api";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../ui/Card";

function FolderCard({ cardData }) {
  const {
    created_at: createdAt,
    description,
    image_source,
    url,
  } = cardData;

  const cardDate = formatDate(createdAt);
  const cardCreatedAt = formatDateAgo(createdAt);

  return (
    <div>
      <Card className={styles.card_container}>
        <div className={styles.card_iamgeBox}>
          <img
            className={styles.card_iamgeBox_image}
            src={image_source || `/Images/default.png`}
            alt="card_Image"
          />
          <img
            className={styles.card_iamgeBox_star}
            src="/Icons/star.svg"
            alt="star"
          />
        </div>
        <div className={styles.card_content}>
          <CardHeader className={styles.card_header}>
            <p className={styles.card_date}>{cardDate}</p>
            <img src="/Icons/kebab.png" alt="kebab" />
          </CardHeader>
          <CardContent>
            <p className={styles.card_description}>{description}</p>
          </CardContent>
          <CardFooter>
            <p className={styles.card_createdAt}>{cardCreatedAt}</p>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}

export default FolderCard;
