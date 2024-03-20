import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import EmptyCase from "../../../assets/svg/CardImageEmptyCase";
import getElapsedTime from "../../../hooks/getElapsedTime";
import getFormatDate from "../../../hooks/getFormatDate";

export default function Card({ link }) {
  const { imageSource, createdAt, description, title, url } = link;
  const updatedAt = getElapsedTime(createdAt);
  const formatData = getFormatDate(createdAt);

  return (
    <Link to={url} className={styles.Card}>
      {imageSource ? (
        <figure className={styles.imgBox}>
          <img className={styles.img} src={imageSource} alt={title} />
        </figure>
      ) : (
        <figure className={styles.emptyCaseBox}>
          <EmptyCase className={styles.emptyCase} />
        </figure>
      )}
      <figcaption className={styles.caption}>
        <time className={styles.updatedAt}>{updatedAt}</time>
        <p className={styles.description}>{description}</p>
        <time className={styles.createdAt}>{formatData}</time>
      </figcaption>
    </Link>
  );
}
