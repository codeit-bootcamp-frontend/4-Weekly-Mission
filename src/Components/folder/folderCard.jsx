import React from "react";
import { formatDate, formatDateAgo } from "../../utils/DateUtils";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../ui/Card";

function folderCard() {
  return (
    <div>
      <Card className={styles.card_container}>
        <div className={styles.card_iamgeBox}>
          <img
            className={styles.card_iamgeBox_image}
            src={""}
            alt="card_Image"
          />
        </div>
        <div className={styles.card_content}>
          <CardHeader>
            <p className={styles.card_date}></p>
          </CardHeader>
          <CardContent>
            <p className={styles.card_description}></p>
          </CardContent>
          <CardFooter>
            <p className={styles.card_createdAt}></p>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}

export default folderCard;
