import React from "react";
import styles from "./ShareCard.module.css";
import { formatDate, formatDateAgo } from "../../utils/DateUtils";

function LinkCard({ link }) {
  const {
    createdAt,
    description,
    imageSource = "/Images/default.png",
  } = link;
  const cardDate = formatDate(createdAt);
  const cardCreatedAt = formatDateAgo(createdAt);

  return <></>;
}

export default LinkCard;
