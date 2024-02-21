import React from "react";
import styles from "./ShareCard.module.css";
import { formatDate, formatDateAgo } from "../../utils/DateUtils";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../ui/Card";

function LinkCard({ link }) {
  const {
    createdAt,
    description,
    imageSource = "/Images/default.png",
  } = link;
  const cardDate = formatDate(createdAt);
  const cardCreatedAt = formatDateAgo(createdAt);

  return (
    <Card className={styles.card_container}>
      <div className={styles.card_iamgeBox}>
        <img
          className={styles.card_iamgeBox_image}
          src={imageSource}
          alt="card_Image"
        />
      </div>
      <div className={styles.card_content}>
        <CardHeader>
          <p className={styles.card_date}>{cardDate}</p>
        </CardHeader>
        <CardContent>
          <p className={styles.card_description}>{description}</p>
        </CardContent>
        <CardFooter>
          <p className={styles.card_createdAt}>{cardCreatedAt}</p>
        </CardFooter>
      </div>
    </Card>
  );
}

export default LinkCard;
