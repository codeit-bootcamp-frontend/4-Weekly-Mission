import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import EmptyCase from "@/assets/svg/CardImageEmptyCaseIcon";
import getElapsedTime from "@/hooks/getElapsedTime";
import getFormatDate from "@/hooks/getFormatDate";
import { ObjectLink } from "@/constants/index.types";

interface CardProps {
  link: ObjectLink;
}

export default function Card({ link }: CardProps) {
  const { imageSource, createdAt, description, title, url } = link;
  const createDate = getElapsedTime(createdAt);
  const formatDate = getFormatDate(createdAt);

  return (
    <Link to={url} className={styles.Card}>
      {imageSource ? (
        <figure className={styles.imgBox}>
          <img className={styles.img} src={imageSource} alt={title} />
        </figure>
      ) : (
        <figure className={styles.emptyCaseBox}>
          <EmptyCase />
        </figure>
      )}
      <figcaption className={styles.caption}>
        <time className={styles.updatedAt}>{createDate}</time>
        <p className={styles.description}>{description}</p>
        <time className={styles.createdAt}>{formatDate}</time>
      </figcaption>
    </Link>
  );
}
